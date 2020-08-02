import { Route } from "../router";
import { selectors } from "../state";

export const service = state => {
  if (selectors.page(state) === Route.Settings && !state.user) {
    return {
      // FIXME: not thrilled about this. Maybe use the builder pattern?
      route: selectors.toRoute(Route.Login, {}, {}, { replace: true }),
      login: {
        message: "Please login.",
        returnTo: selectors.toRoute(Route.Settings)
      }
    };
  }
};