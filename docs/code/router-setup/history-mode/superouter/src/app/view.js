import m from "mithril";

import { Home } from "router-setup-common/src/home";
import { Login } from "../login";
import { Settings } from "../settings";
import { Tea } from "../tea";
import { TeaSearch } from "../teaSearch/view";
import { NotFound } from "router-setup-common/src/notFound";
import { Route } from "../router";
import { getLinkAttrs } from "../router/link";

const componentMap = Route.fold({
  Home: () => Home,
  Login: () => Login,
  Settings: () => Settings,
  Tea: () => Tea,
  TeaDetails: () => Tea,
  TeaSearch: () => TeaSearch,
  NotFound: () => NotFound
});

export const App = {
  view: ({ attrs: { state, actions, router } }) => {
    const Component = componentMap(state.route);
    const isActive = tab => (tab === Component ? ".active" : "");

    return m(
      "div",
      m(
        "nav.navbar.navbar-default",
        m(
          "ul.nav.navbar-nav",
          m("li" + isActive(Home), m("a", getLinkAttrs(router, Route.of.Home()), "Home")),
          m("li" + isActive(Login), m("a", getLinkAttrs(router, Route.of.Login()), "Login")),
          m(
            "li" + isActive(Settings),
            m("a", getLinkAttrs(router, Route.of.Settings()), "Settings")
          ),
          m("li" + isActive(Tea), m("a", getLinkAttrs(router, Route.of.Tea()), "Tea")),
          m(
            "li" + isActive(TeaSearch),
            m("a", getLinkAttrs(router, Route.of.TeaSearch()), "Tea Search")
          )
        )
      ),
      m(Component, { state, actions, router }),

      /* Show or hide the Please Wait modal. See public/css/style.css */
      m(
        "div",
        {
          style: {
            visibility: state.loadTeas || state.loadSearchTeas ? "visible" : "hidden"
          }
        },
        m("div.simpleModal", m("div.simpleBox", m("div", "Loading, please wait...")))
      )
    );
  }
};