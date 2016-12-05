import * as React from 'react';
import Cursor from './Cursor';

const title = `When There's a Will`;

interface ITitleState {
}

class Title extends React.Component<any, ITitleState> {
  render() {
    return (
      <h1 className="title green">
        {title}
        <Cursor></Cursor>
      </h1>
    );
  }
}

export default Title;