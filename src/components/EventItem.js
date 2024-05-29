import React from 'react';
import './EventItem.css';
import logo from '../resources/camp.png';

function EventItem({ title, date, user }) {
  return (
    <div className="event-item">
      <button className='custom-button-3' >
        <h2>{user}</h2>
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
