import React from 'react';


export default React.createClass({

  handleClick(e) {
    e.preventDefault();
    let {props} = this;
    var eventName = props.children + " button";
    var action = props.action ? props.action : "";

    if(props.href) {
      window.location.href = props.href;
    } else {
      props.onClick()
    }

    ga('send', 'event', action, eventName, props.href);
  },

  render() {
    let {props} = this;
    let cl = "Button ";
    var c = cl + props.className;

    return(
      <button href={props.href} className={c} onClick={this.handleClick}>
        {props.children}
      </button>
    )
  }
});
