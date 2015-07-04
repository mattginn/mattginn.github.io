import React from 'react';
import Headline from './Headline.jsx';
import Work from './Work.jsx';
import data from '../data.js';

let list = data.projects.featured;

export default React.createClass({
  render() {
    return(
      <div className="site-content">
      <Headline>{data.headline}</Headline>
      <Work list={list} />
      </div>
    );
  }
});
