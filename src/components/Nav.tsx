import * as React from 'react';
import Cursor from './Cursor';

const title = `When There's a Will`;

interface INavState {

}

class Nav extends React.Component<any, INavState> {
  render() {
    return (
      <div className="nav">
        <div className="nav-wrapper">
          <h1 className="title cyan">
            {title}
            <Cursor></Cursor>
          </h1>
          <div className="title-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;