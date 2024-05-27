// src/pages/NewsPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import NewsSection from '../components/SeccionNoticias';
import '../App.css';

function Noticias() {
  return (
    <div className="App-flexible">
      <Sidebar />
      <NewsSection />
    </div>
  );
}

export default Noticias;