import * as React from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

const App = ({ children }) =>
  <div className="column">
    <Nav></Nav>
    {children}
    <footer>
      <Link to="/">Filterable Table</Link>
      <Link to="/about">About</Link>
    </footer>
  </div>;

export default App;
