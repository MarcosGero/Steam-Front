import React from 'react';
import EventItem from './EventItem';
import './SeccionNoticias.css';

function SeccionNoticias() {
  return (
    <div className="news-section">
      <div className="upcoming-events">
        <h3>PROXIMAMENTE</h3>
        <div className="events-list">
          <EventItem user="Indie Game Fest" title="Indie Game Fest 2024" date="miércoles a la(s) 14:00" />
          <EventItem user="Warhammer: Vermintide 2" title="Versus! The Returning Alpha Test, coming May 30!" date="jueves a la(s) 10:00" />
          <EventItem user="Warframe" title="Warframe: Devstream #180" date="viernes a la(s) 15:00" />
        </div>
      </div>
      <div className="news-list">
        <h3>Hoy</h3>
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