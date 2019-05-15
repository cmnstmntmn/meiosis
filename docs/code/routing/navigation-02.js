/** @jsx preact.h */
import preact from "preact@8.4.2/dist/preact.mjs";
import merge from "mergerino@0.0.3";
import meiosis from "meiosis-setup@1.2.1";

import { Route } from "./routes-02";

import {
  Home,
  Login,
  Settings,
  Tea,
  Coffee,
  Beer
} from "./components-02";

const componentMap = {
  Home,
  Login,
  Settings,
  Tea,
  Coffee,
  Beer
};

const Root = ({ state, actions }) => {
  const Component = componentMap[state.route.id];
  const isActive = tab =>
    tab === Component ? " active" : "";

  return (
    <div>
      <ul className="nav">
        <li className={"nav-item" + isActive(Home)}>
          <a
            href="#"
            onClick={() => actions.navigateTo(Route.Home())}
          >
            Home
          </a>
        </li>
        <li className={"nav-item" + isActive(Login)}>
          <a
            href="#"
            onClick={() =>
              actions.navigateTo(Route.Login())
            }
          >
            Login
          </a>
        </li>
        <li className={"nav-item" + isActive(Settings)}>
          <a
            href="#"
            onClick={() =>
              actions.navigateTo(Route.Settings())
            }
          >
            Settings
          </a>
        </li>
        <li className={"nav-item" + isActive(Tea)}>
          <a
            href="#"
            onClick={() => actions.navigateTo(Route.Tea())}
          >
            Tea
          </a>
        </li>
        <li className={"nav-item" + isActive(Coffee)}>
          <a
            href="#"
            onClick={() =>
              actions.navigateTo(Route.Coffee())
            }
          >
            Coffee
          </a>
        </li>
        <li className={"nav-item" + isActive(Beer)}>
          <a
            href="#"
            onClick={() => actions.navigateTo(Route.Beer())}
          >
            Beer
          </a>
        </li>
      </ul>
      <hr />

      <div style={{ paddingLeft: ".4rem" }}>
        <Component state={state} actions={actions} />
      </div>
    </div>
  );
};

const App = meiosis.preact.setup({ preact, Root });
const app = {
  Initial: () => ({
    route: Route.Home()
  }),
  Actions: ({ update }) => ({
    navigateTo: route => update({ route })
  })
};

meiosis.mergerino
  .setup({ stream: meiosis.simpleStream, merge, app })
  .then(({ states, actions }) => {
    // eslint-disable-next-line react/no-deprecated
    preact.render(
      <App states={states} actions={actions} />,
      document.getElementById("app")
    );
  });
