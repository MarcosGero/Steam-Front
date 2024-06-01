import React from 'react';
import './EventItemBig.css';


function EventItemBig({ title, date, user, logot, description, detail, video }) {
    return (
        <div className="event-item-b">
            <button className='custom-button-b'>
                <div className='contenedor' >
                    <div className='section-info-b'>
                        <div className='event-info-b'>
                            <img src={logot} alt="logo"/>
                            <h2>{user}</h2>
                        </div>
                        <h2>{title}</h2>
                        <p>{date}</p>
                        <h4>{description}</h4>
                        <h5>{detail}</h5>
                    </div>
                    <div className='section-info-c'>
                        <img src={video} alt="logo"/>
                    </div>
                </div>
            </button>
        </div>
);
}

export default EventItemBig;