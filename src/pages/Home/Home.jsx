import React from 'react';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import './Home.css';

const Home = () => (
  <main>
    <OfferBanner />
    <h1>Bienvenido a <span className='chocos'>Chocos</span> el <span className='inge'>Inge</span></h1>
    <picture className='man-drinking'></picture>
  </main>
);

export default Home;