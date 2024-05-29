import React from 'react';
import EventItem from './EventItem';
import EventItemBig from './EventItemBig';
import './SeccionNoticias.css';

import user1 from '../resources/ico_1.jpg';
import user2 from '../resources/ico_2.jpg';
import user3 from '../resources/ico_3.jpg';

import v1 from '../resources/v1.png'
import v2 from '../resources/v2.png'

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
          <EventItemBig user='Capes' logot={user1} title='CAPES is OUT NOW!' date='LANZAMIENTO DEL JUEGO HACE 1 HORA'
                        detail='Hey fellow superheroes and those who want to become one!'
                        description= 'The superheroes arribe with a smashing three-point landing'
                        video={v1}/>
        </div>
        <div className="news-item">
          <EventItemBig user='Reus 2' logot={user2} title='5 tips to start' date='NOTICIAS HACE 3 HORAS'
                        description='Read our 5 tips to start Reus 2 smoothly and master the game. A video format is also available on Youtube!'
                        detail= 'Greetings, Mighty Shaper of Worlds, Welcome to the expansive and wondrous universe of Reus 2, where you wield the power to shape planets and influence the delicate balance of...'
                        video={v2}/>
        </div>
        <div className="news-item">
          <EventItemBig user='Capes' logot={user1} title='CAPES is OUT NOW!' date='LANZAMIENTO DEL JUEGO HACE 1 HORA'
                        detail='Hey fellow superheroes and those who want to become one!' description=
                            'The superheroes arribe with a smashing three-point landing' video={v1}/>
        </div>
      </div>
    </div>
  );
}

export default SeccionNoticias;