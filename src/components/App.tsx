import * as React from 'react';
import { Link } from 'react-router';
import Title from './Title';

const App = ({ children }) =>
  <div>
    <Title></Title>
    {children}
    <footer>
      <Link to="/">Filterable Table</Link>
      <Link to="/about">About</Link>
    </footer>
  </div>;

export default App;
