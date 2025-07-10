import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} Chocos el Inge. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;