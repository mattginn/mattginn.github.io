import React from 'react';
import Logo from './Logo.jsx';
import data from '../data.js';

export default React.createClass({
  render() {
    return(
      <header className="Header">
        <Logo href="/">matt.codes</Logo>
      </header>
    );
  }
});
