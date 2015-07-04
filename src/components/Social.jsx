import React from 'react';
import data from '../data.js';

export default React.createClass({

  link(val, idx) {
    var target;
    if(val.name !== "Skype") {
      target = "_blank"
    }

    var network = val.name.toLowerCase();

    return(
      <li key={idx}>
        <a href={val.url} target={target}><span className={"fa fa-" + network}></span>{"@" + val.username}</a>
      </li>
    );
  },

  render() {
    var {props, link} = this;
    var {links} = props;

    links = links.map(link);

    return(
      <ul className="Social">
        {links}
      </ul>
    );

  }

});
