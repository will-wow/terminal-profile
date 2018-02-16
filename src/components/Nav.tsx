import * as React from "react";
import { Link } from "react-router";
import Cursor from "./Cursor";

const title = `When There's a Will`;

interface INavState {}

class Nav extends React.Component<any, INavState> {
  render() {
    return (
      <div className="nav">
        <div className="nav-wrapper">
          <h1 className="title cyan">
            {title}
            <Cursor />
          </h1>
          <div className="title-links">
            <Link to="/">About</Link>
            <Link to="/projects">Projects</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
