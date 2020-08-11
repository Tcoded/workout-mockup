import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Reviews from './components/Reviews/Reviews';
import Library from './components/Library/Library';
import Equipment from './components/Equipment/Equipment';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='main_container'>
      <Header />
      <Hero />
      <Reviews />
      <Library />
      <h3 className='equipment_header'>Interested in our exciting workout equipment?</h3>
      <Equipment />
      <Footer />
    </div>
  );
};

export default App;
