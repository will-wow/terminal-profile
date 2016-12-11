import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

interface ITerminalState {
}

class Terminal extends React.Component<any, ITerminalState> {
  render() {
    return (
      <Scrollbars className="terminal">
        { this.props.children }
      </Scrollbars>
    );
  }
}

export default Terminal;