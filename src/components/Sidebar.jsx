import React from 'react';
import Button from './Button.jsx';

export default React.createClass({

  getInitialState() {
    return {
      open: false
    }
  },

  toggleState() {
    if(this.state.open) {
      this.setState({
        open: false
      });
    } else {
      this.setState({
        open: true
      })
    }
  },

  openState() {
    if(!this.state.open) {
      this.setState({
        open: true
      });
    }
  },

  render() {
    let {props} = this;
    var open = "";
    var active = "";

    if(this.state.open) {
      open = " Sidebar__open";
      active = " active";
    }

    return(
      <div className={"Sidebar__wrap" + open}>
        <div className="Sidebar__overlay" onClick={this.toggleState}></div>
        <aside className="Sidebar" onClick={this.openState}>
          <Button className={"Sidebar__toggle" + active} onClick={this.toggleState}>
            <span>Toggle Sidebar</span>
          </Button>
          <div className="Sidebar__content">
            {props.children}
          </div>
        </aside>
      </div>
    );

  }

});
