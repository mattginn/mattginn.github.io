import React from 'react';

export default React.createClass({

  render() {
    let {props} = this;
    return(
      <div className="Page" id={props.id}>
        {props.children}
      </div>
    );
  }

});
