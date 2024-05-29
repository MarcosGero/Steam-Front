import React from 'react';
import EventItem from './EventItem';
import './SeccionNoticias.css';

import user1 from '../resources/ico_1.jpg';
import user2 from '../resources/ico_2.jpg';
import user3 from '../resources/ico_3.jpg';

function SeccionNoticias() {
  return (
    <div className="news-section">
      <div className="upcoming-events">
        <h3>PROXIMAMENTE</h3>
        <div className="events-list">
          <EventItem user="Indie Game Fest" title="Indie Game Fest 2024" date="miércoles a la(s) 14:00" logot={user1}/>
          <EventItem user="Team Fortress 2" title="Seasonalander Summer 2024" date="jueves a la(s) 10:00" logot={user2}/>
          <EventItem user="Warframe" title="Warframe: Devstream #180" date="viernes a la(s) 15:00" logot={user3}/>
        </div>
      </div>
      <div className="news-list">
        <h3>HOY</h3>
        <div className="news-item">
          <h4>Bellwright</h4>
          <p>Forestry, Staging Ground & Tier 3 Improvements OUT NOW</p>
          <span>Actualización Importante - Hace 1 hora</span>
        </div>
        <div className="news-item">
          <h4>Tom Clancy's Rainbow Six® Siege</h4>
          <p>R6 SIEGE | Year 9 Season 2: Operation New Blood</p>
          <span>Actualización Importante - Hace 1 hora</span>
        </div>
      </div>
    </div>
  );
}

export default SeccionNoticias;