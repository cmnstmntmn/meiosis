/* eslint-env jest */

import createRouteMatcher from "feather-route-matcher";
import queryString from "query-string";

import { createRouter } from "../src/index";

const decodeURI = uri => uri;

describe("hardcoded paths", () => {
  const rootPath = "/my-server/my-base-path";
  const plainHashAndHistoryModeCases = [
    ["default", {}, "#!"],
    ["plainHash", { plainHash: true }, "#"],
    ["historyMode", { rootPath }, rootPath]
  ];

  describe("historyMode and plainHash", () => {
    describe.each(plainHashAndHistoryModeCases)("%s", (_label, caseConfig, prefix) => {
      const historyMode = !!caseConfig.rootPath;
      const matchToRoute = match => ({
        page: match.value,
        params: match.params,
        queryParams: match.queryParams
      });
      const matchToRouteCases = [
        ["default", {}, "value"],
        ["custom", { matchToRoute }, "page"]
      ];

      describe.each(matchToRouteCases)(
        "matchToRoute %s",
        (_label, matchToRouteConfig, pageProp) => {
          // matchToRoute and default, page/value property
          const createRouterConfig = config =>
            Object.assign(config, caseConfig, matchToRouteConfig);
          const routeConfig = {
            "/": "Home",
            "/login": "Login",
            "/user/:id": "UserProfile"
          };
          const routeMatcher = createRouteMatcher(routeConfig);
          const createWindow = path => ({
            decodeURI,
            location: {
              hash: prefix + path,
              pathname: caseConfig.rootPath + path,
              search: ""
            }
          });

          const routeCases = [
            ["initialRoute", {}, router => router.initialRoute],
            ["toRoute", {}, (router, path) => router.toRoute(path)],
            [
              "toRoute with options",
              { replace: true },
              (router, path, options) => router.toRoute(path, options)
            ]
          ];

          describe.each(routeCases)("%s", (_label, options, routerTestFn) => {
            const suffix = historyMode ? "" : "/";
            const routeCases = [
              [
                "slash",
                "/",
                {},
                { [pageProp]: "Home", params: {}, queryParams: {}, url: prefix + suffix }
              ],
              [
                "empty",
                "",
                {},
                { [pageProp]: "Home", params: {}, queryParams: {}, url: prefix + suffix }
              ],
              [
                "slash with queryParams",
                "/?sport=tennis",
                { queryString },
                {
                  [pageProp]: "Home",
                  params: {},
                  queryParams: { sport: "tennis" },
                  url: prefix + suffix + "?sport=tennis"
                }
              ],
              [
                "empty with queryParams",
                "?sport=tennis",
                { queryString },
                {
                  [pageProp]: "Home",
                  params: {},
                  queryParams: { sport: "tennis" },
                  url: prefix + suffix + "?sport=tennis"
                }
              ],
              ["just a route", "/login", {}, { [pageProp]: "Login", params: {}, queryParams: {} }],
              [
                "with params",
                "/user/42",
                {},
                { [pageProp]: "UserProfile", params: { id: "42" }, queryParams: {} }
              ],
              [
                "with queryParams",
                "/login?sport=tennis",
                { queryString },
                { [pageProp]: "Login", params: {}, queryParams: { sport: "tennis" } }
              ],
              [
                "with params and queryParams",
                "/user/42?sport=tennis",
                { queryString },
                {
                  [pageProp]: "UserProfile",
                  params: { id: "42" },
                  queryParams: { sport: "tennis" }
                }
              ]
            ];
            test.each(routeCases)("%s", (_label, path, qsConfig, expectedResult) => {
              const routerConfig = createRouterConfig(
                Object.assign(
                  {
                    routeMatcher,
                    wdw: createWindow(path)
                  },
                  qsConfig
                )
              );
              const router = createRouter(routerConfig);

              expect(routerTestFn(router, path, options)).toMatchObject(
                Object.assign({ url: prefix + path }, expectedResult, options)
              );
            });
          });

          describe("toUrl", () => {
            test("prepends the prefix", () => {
              const path = "/login";
              const wdw = createWindow(path);
              const routerConfig = createRouterConfig({ routeMatcher, wdw });
              const router = createRouter(routerConfig);

              expect(router.toUrl(path)).toEqual(prefix + path);
            });
          });

          describe("start", () => {
            test("calls onRouteChange", () => {
              const path = "/login";
              const wdw = createWindow(path);
              const routerConfig = createRouterConfig({ routeMatcher, wdw });
              const router = createRouter(routerConfig);

              const onRouteChange = jest.fn();

              router.start(onRouteChange);

              wdw.location.pathname = prefix + path;
              wdw.onpopstate();

              const calls = onRouteChange.mock.calls;
              expect(calls.length).toBe(1);
              expect(calls[0][0]).toMatchObject({
                [pageProp]: "Login",
                params: {},
                queryParams: {},
                url: prefix + path
              });
            });
          });

          describe("syncLocationBar", () => {
            const syncLocationBarCases = [
              ["pushState", {}],
              ["replaceState", { replace: true }]
            ];
            test.each(syncLocationBarCases)("calls %s", (method, params) => {
              const path = "/login";
              const methodFn = jest.fn();
              const wdw = Object.assign(createWindow(path), { history: { [method]: methodFn } });
              const routerConfig = createRouterConfig({ routeMatcher, wdw });
              const router = createRouter(routerConfig);
              const url = prefix + "/user/42";

              router.syncLocationBar(Object.assign({ url }, params));

              const calls = methodFn.mock.calls;
              expect(calls.length).toBe(1);
              expect(calls[0][0]).toEqual({});
              expect(calls[0][1]).toEqual("");
              expect(calls[0][2]).toEqual(url);
            });
          });

          if (historyMode) {
            describe("getLinkHandler", () => {
              test("calls pushState and onpopstate", () => {
                const preventDefault = jest.fn();
                const pushState = jest.fn();
                const onpopstate = jest.fn();

                const wdw = Object.assign(createWindow("/"), {
                  onpopstate,
                  history: { pushState }
                });
                const routerConfig = createRouterConfig({ routeMatcher, wdw });
                const router = createRouter(routerConfig);
                const url = prefix + "/user/42";

                const linkHandler = router.getLinkHandler(url);
                linkHandler({ preventDefault });

                expect(preventDefault.mock.calls.length).toBe(1);

                const calls = pushState.mock.calls;
                expect(calls.length).toBe(1);
                expect(calls[0][0]).toEqual({});
                expect(calls[0][1]).toEqual("");
                expect(calls[0][2]).toEqual(url);

                expect(onpopstate.mock.calls.length).toBe(1);
              });
            });
          }
        }
      );
    });
  });
});