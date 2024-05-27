import React from 'react';
import './EventItem.css';

function EventItem({ title, date }) {
  return (
    <div className="event-item">
      <h4>{title}</h4>
      <p>{date}</p>
    </div>
  );
}

export default EventItem;
