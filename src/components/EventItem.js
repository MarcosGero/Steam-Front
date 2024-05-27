import React from 'react';
import './EventItem.css';

function EventItem({ title, date, user }) {
  return (
    <div className="event-item">
      <button className='custom-button-3' >
        <h2>{user}</h2>
        <h4>{title}</h4>
        <p>{date}</p>
      </button>
    </div>
  );
}

export default EventItem;
