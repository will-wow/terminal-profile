import * as React from "react";
import classnames = require("classnames");

interface ICursorState {
  blink: boolean;
}

class Cursor extends React.Component<any, ICursorState> {
  interval: any;

  constructor(props) {
    super(props);

    this.state = {
      blink: true
    };

    this.interval = setInterval(this.updateBlink, 530);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const titleClass = classnames("cursor", { on: this.state.blink });
    return <span className={titleClass} />;
  }

  private updateBlink = (): void => {
    this.setState({
      blink: !this.state.blink
    });
  };
}

export default Cursor;
