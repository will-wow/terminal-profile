import * as React from "react";
import { Link } from "react-router";
import Nav from "./Nav";
import Terminal from "./Terminal";

const App = ({ children }) => (
  <div className="app row">
    <Nav />

    <Terminal>{children}</Terminal>
  </div>
);

export default App;
