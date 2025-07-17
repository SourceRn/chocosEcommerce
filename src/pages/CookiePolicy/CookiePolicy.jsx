import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy" style={{ padding: '2rem', maxWidth: '800px', margin: '2rem auto', color: '#4b2e2a', backgroundColor: '#f9f3f2', borderRadius: '8px ', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1>Política de Cookies</h1>

      <p>
        En <strong>ChocosElInge</strong>, utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Esta política explica qué son las cookies, cómo las usamos y cómo puedes controlarlas.
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Sirven para reconocer tu navegador y recordar información relevante como tus preferencias o el contenido de tu carrito de compras.
      </p>

      <h2>¿Qué tipos de cookies usamos?</h2>
      <ul>
        <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento del sitio, como el inicio de sesión o el proceso de compra.</li>
        <li><strong>Cookies de análisis:</strong> nos permiten analizar cómo los usuarios interactúan con el sitio (por ejemplo, con Google Analytics).</li>
        <li><strong>Cookies de preferencias:</strong> guardan tus configuraciones de idioma, moneda u otras preferencias.</li>
        <li><strong>Cookies de marketing:</strong> se usan para mostrar anuncios relevantes en función de tu navegación.</li>
      </ul>

      <h2>¿Cómo puedes controlar las cookies?</h2>
      <p>
        Puedes configurar tu navegador para aceptar o rechazar cookies. También puedes eliminar las cookies almacenadas en cualquier momento. Sin embargo, desactivar ciertas cookies puede afectar la funcionalidad del sitio.
      </p>

      <h2>Consentimiento</h2>
      <p>
        Al continuar usando este sitio, aceptas el uso de cookies según esta política. Puedes cambiar tu consentimiento en cualquier momento desde la configuración de tu navegador o contactándonos.
      </p>

      <h2>Contacto</h2>
      <p>
        Si tienes dudas sobre nuestra política de cookies, puedes contactarnos en <a href="mailto:privacidad@chocoshop.com">privacidad@chocoselinge.com</a>.
      </p>
    </div>
  );
};

export default CookiePolicy;
