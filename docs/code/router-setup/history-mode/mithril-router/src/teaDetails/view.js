import m from "mithril";

import { Route } from "router-setup-common/src/router";

export const TeaDetails = {
  view: ({ attrs: { state, id } }) =>
    m(
      "div",
      m("div", state.tea[id]),
      m("div", m(m.route.Link, { href: router.toUrl(Route.Tea) }, "Close"))
    )
};
