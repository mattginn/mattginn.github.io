import React from 'react';


export default React.createClass({

  handleClick(e) {
    e.preventDefault();
    let {props} = this;

    if(props.href) {
      window.location.href = props.href;
    } else {
      props.onClick()
    }
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
