import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars";

interface ITerminalState {}

class Terminal extends React.Component<any, ITerminalState> {
  render() {
    return (
      <Scrollbars className="terminal">
        <div className="terminal-container">{this.props.children}</div>
      </Scrollbars>
    );
  }
}

export default Terminal;
