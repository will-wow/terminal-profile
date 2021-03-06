import * as React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import About from "./components/About";
import Projects from "./components/Projects";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path="/projects" component={Projects} />
  </Route>
);
