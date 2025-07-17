import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CookieBanner from './components/CookieBanner/CookieBanner';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <AppRouter />
        <CookieBanner />
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;