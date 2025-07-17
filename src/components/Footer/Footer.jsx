import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <p>
      ChocoElInge S.A. de C.V., RFC: CHO123456XXX, Dirección: Av. Centro 123,
      Aguascalientes, México.
    </p>
    <p>Contacto: contacto@chocoselinge.com"</p>
    <p>
      Te invitamos a leer nuestro{" "}
      <Link to="/privacity-advice">Aviso de Privacidad</Link> y{" "}
      <Link to="/terms-conditions">Terminos y Condiciones </Link>. Asi como nuestra{" "}
      <Link to="/cookie-policy">Política de Cookies</Link>. También puedes leer nuestra{" "}
      <Link to="/legal-information">Información Legal</Link>
    </p>
    <p>
      &copy; {new Date().getFullYear()} Chocos el Inge. Todos los derechos
      reservados.
    </p>
  </footer>
);

export default Footer;
