// App.jsx

import React from 'react';
import Header from './Header.jsx';
import Social from './Social.jsx';
import data from '../data.js';
import Page from './Page.jsx';
import Sidebar from './Sidebar.jsx';
import Work from './Work.jsx';
import Button from './Button.jsx';

let {social_networks} = data;
let {featured} = data.clients;
let {available} = data.availability;

export default React.createClass({

  render() {

    var availableClass = "unavailable";
    var availableMessage = data.text.unavailable;

    if(available) {
      availableClass = "available";
      availableMessage = data.text.available;
    }

    return (
      <main className="site-wrap" role="main">
        <Header />
        <Page>
          <p>
            {data.text.intro}
          </p>
          <Work list={featured} />
        </Page>
        <Sidebar>
          <h2 className="Sidebar__title">contact me</h2>
          <p>{data.text.contact}</p>
          <p className={availableClass}>{availableMessage}</p>
          <div className="contact__wrap">
            <div className="contact__section">
              <header className="contact__header">
                <h3 className="contact__name">{data.info.name}</h3>
                <h4 className="contact__role">{data.info.role}</h4>
              </header>
              <address>
                <p>{data.info.location}</p>
                <a href={"mailto:" + data.info.email}>{data.info.email}</a>
              </address>
            </div>
            <div className="contact__section">
              <Button href={"mailto:" + data.info.email} className="contact-button" action="Email">Shoot me an email</Button>
            </div>
          </div>
          <hr />
          <Social links={social_networks} />
        </Sidebar>
      </main>
    );
  }
});
