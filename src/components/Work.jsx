import React from 'react';

export default React.createClass({
  item(val, idx) {
    var url;
    var viewButton;
    var link = val.link;

    if(link) {
      url = val.url;
      viewButton = <span className='Work__view'>View {val.name} site</span>
    }

    return (
      <li key={idx} className="Work__item">
        <a href={url} target="_blank">
          <span className="Work__icon">
            <img src={"dist/" + val.icon} alt={val.name + " icon"} width="58" height="58" />
          </span>
          <div className="Work__item__content">
            <p className="Work__item__title">{val.name} &ndash; {val.description}</p>
            <p className="Work__item__role">role: {val.role}</p>
            {viewButton}
          </div>
        </a>
      </li>
    );
  },

  render() {
    var {props,item} = this;
    var {list} = props;

    list = list.map(item);

    return(
      <ul className="Work">
        {list}
      </ul>
    );
  }
});
