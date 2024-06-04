import React from 'react';
import EventItem from './EventItem';
import EventItemBig from './EventItemBig';
import './SeccionNoticias.css';

import user1 from '../resources/ico_1.jpg';
import user2 from '../resources/ico_2.jpg';
import user3 from '../resources/ico_3.jpg';

import ico1 from '../resources/v3_1.jpg';
import ico2 from '../resources/v4_1.jpg';
import ico3 from '../resources/v5_1.jpg';

import v1 from '../resources/v1.png'
import v2 from '../resources/v2.png'
import v3 from '../resources/v3.png'
import v4 from '../resources/v4.png'
import v5 from '../resources/v5.jpg'

function SeccionNoticias() {
  return (
      <div className="news-section">
        <div className="upcoming-events">
          <h3>PROXIMAMENTE</h3>
          <div className="events-list">
            <EventItem user="Indie Game Fest" title="Indie Game Fest 2024" date="miércoles a la(s) 14:00"
                       logot={user1}/>
            <EventItem user="Team Fortress 2" title="Seasonalander Summer 2024" date="jueves a la(s) 10:00"
                       logot={user2}/>
            <EventItem user="Warframe" title="Warframe: Devstream #180" date="viernes a la(s) 15:00"
                       logot={user3}/>
          </div>
        </div>
          <div className="news-list">
              <h3>HOY</h3>
              <div className="news-item">
                  <EventItemBig user='Capes' logot={user1}
                                title='CAPES is OUT NOW!'
                                date='LANZAMIENTO DEL JUEGO HACE 1 HORA'
                                detail='Hey fellow superheroes and those who want to become one!'
                                description='The superheroes arribe with a smashing three-point landing'
                                video={v1}/>
              </div>
              <div className="news-item">
                  <EventItemBig user='Reus 2' logot={user2}
                                title='5 tips to start'
                                date='NOTICIAS HACE 3 HORAS'
                                description='Read our 5 tips to start Reus 2 smoothly and master the game. A video format is also available on Youtube!'
                                detail='Greetings, Mighty Shaper of Worlds, Welcome to the expansive and wondrous universe of Reus 2, where you wield the power to shape planets and influence the delicate balance of...'
                                video={v2}/>
              </div>
              <div className="news-item">
                  <EventItemBig user='Shin Megami Tensei V : Vengeance' logot={ico1}
                                title='Launch Trailer Released, SMTV:V Is Almost Here!'
                                date='NOTICIAS HACE 2 HORAS'
                                description=''
                                detail='We are less then two weeks away from June 14 and the release of Shin Megami Tensei V: Vengeance! Watch the Launch Trailer now and get ready to return balance to a decimated Tokyo:...'
                                video={v3}/>
              </div>
              <div className="news-item">
                  <EventItemBig user='Killer Klowns from Space: The Game' logot={ico2}
                                title='CAPES is OUT NOW!'
                                date='NOTICIAS HACE 3 HORAS'
                                description='Today is launch day! Look inside for everything you need to know!'
                                detail='It’s here! Killer Klowns From Outer Space: The Game is LIVE and available on Steam, PS5 and Xbox Series X|S!'
                                video={v4}/>
              </div>
              <div className="news-item">
                  <EventItemBig user='Field of Glory : Kingdoms' logot={ico3}
                                title='Ghost of Tsushima Directors Cut Patch 3 Release Notes'
                                date='ACTUALIZACIÓN NORMAL HACE 6 HORAS'
                                description=''
                                detail='Hey everyone, Patch 3 is available now for Ghost of Tsushima Directors Cut on PC. This update fixes several issues that have been reported by the community and includes stability...'
                                video={v5}/>
              </div>


          </div>

      </div>
  );
}

export default SeccionNoticias;