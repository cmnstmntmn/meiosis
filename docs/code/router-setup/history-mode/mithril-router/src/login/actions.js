import { Route } from "router-setup-common/src/router";
import { selectors } from "../state";

export const Actions = update => ({
  username: value => update({ login: { username: value } }),
  password: value => update({ login: { password: value } }),

  login: (username, returnTo) =>
    update({ user: username, route: returnTo || selectors.toRoute(Route.Home) })
});
