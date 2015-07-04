import React from 'react';

export default React.createClass({
  render() {
    var {props,state} = this;
    return(
      <h1><a href={props.href} className="Logo">{props.children}</a></h1>
    );
  }

});
