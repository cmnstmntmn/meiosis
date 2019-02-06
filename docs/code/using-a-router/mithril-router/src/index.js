import m from "mithril";
import stream from "mithril/stream";
import { P } from "patchinko/explicit";

import { app, App } from "./app";
import { createRoutes } from "./util/router";

const update = stream();

Promise.resolve().then(() => app.initialState()).then(initialState => {
  const models = stream.scan(P, initialState, update);
  const states = models.map(state =>
    app.computed.reduce((x, f) => P(x, f(x)), state)
  );

  // Only for using Meiosis Tracer in development.
  require("meiosis-tracer")({
    selector: "#tracer",
    rows: 10,
    streams: [
      { stream: models, label: "models" },
      { stream: states, label: "states" }
    ]
  });

  const actions = app.actions(update);
  m.route(document.getElementById("app"), "/",
    createRoutes({ states, actions, update, App }));

  app.services.forEach(service => service(states, update));

  states.map(() => m.redraw());
});
