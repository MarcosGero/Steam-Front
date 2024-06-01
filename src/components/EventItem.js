import React from 'react';
import './EventItem.css';
import logo from '../resources/camp.png';


function EventItem({ title, date, user, logot}) {
  return (
    <div className="event-item">
      <button className='custom-button-3' >
        <div className='usuario' >
            <img src={logot} alt="logo" />
            <h2>{user}</h2>
        </div>
        <h4>{title}</h4>
        <div className="event-info">
           <p>{date}</p>
           <img src={logo} alt="logo"/>
        </div>
      </button>
    </div>
  );
}

export default EventItem;
