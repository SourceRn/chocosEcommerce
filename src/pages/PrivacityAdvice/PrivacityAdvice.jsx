import React from "react";

const PrivacityAdvice = () => (
  <div
    style={{
      maxWidth: 600,
      margin: "2rem auto",
      padding: "2rem",
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    }}
  >
    <h1>Aviso de Privacidad</h1>
    <p>
      En nuestro sitio, tu privacidad es muy importante para nosotros. Al
      suscribirte a nuestro newsletter, recopilamos tu dirección de correo
      electrónico únicamente con el propósito de enviarte novedades, promociones
      y actualizaciones relevantes. No compartimos tu correo con terceros y
      puedes darte de baja en cualquier momento.
    </p>
    <p>
      Al realizar una compra, la información de tu tarjeta es procesada de forma
      segura por nuestro proveedor de pagos y <strong>no es almacenada</strong>{" "}
      en nuestros servidores. Solo se utiliza en el momento de la transacción
      para completar tu compra.
    </p>
    <p>
      Si tienes dudas sobre cómo manejamos tu información, puedes contactarnos
      en cualquier momento.
    </p>
    <h2>Cumplimiento de Protección de Datos</h2>
    <p>
      En <strong>ChocoShop</strong> cumplimos con la{" "}
      <strong>
        Ley Federal de Protección de Datos Personales en Posesión de los
        Particulares
      </strong>
      . Los datos personales que recabamos se utilizan exclusivamente para
      gestionar tus pedidos, brindarte atención personalizada y enviarte
      comunicaciones si así lo consientes.
    </p>
    <p>
      Puedes ejercer tus derechos ARCO (Acceso, Rectificación, Cancelación y
      Oposición) enviando un correo a:{" "}
      <a href="#">privacidad@chocoselinge.com</a>.
    </p>
  </div>
);

export default PrivacityAdvice;
