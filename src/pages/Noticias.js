import React from 'react';
import Sidebar from '../components/Sidebar';
import NewsSection from '../components/SeccionNoticias';
import './Noticias.css'

function Noticias() {
  return (
    <div className="contenedor">
        <Sidebar />
      <NewsSection />
    </div>
  );
}

export default Noticias;