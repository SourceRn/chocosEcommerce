import React, { useEffect, useState } from 'react';
import './CookieBanner.css';
import { Link } from 'react-router-dom'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Este sitio utiliza cookies para mejorar tu experiencia.{' '}
        <Link to="/cookie-policy">Leer más</Link>
      </p>
      <button onClick={handleAccept}>Aceptar</button>
    </div>
  );
};

export default CookieBanner;
