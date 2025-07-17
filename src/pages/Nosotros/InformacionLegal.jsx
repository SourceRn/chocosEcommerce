import React from 'react';

const IdentificacionEcommerce = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '2rem auto', color: '#4b2e2a', backgroundColor: '#f9f3f2', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1>Identificación del Comercio Electrónico</h1>

      <h2>Información del Vendedor</h2>
      <ul>
        <li><strong>Nombre Comercial:</strong> ChocoElInge</li>
        <li><strong>Razón Social:</strong> ChocoShop S.A. de C.V.</li>
        <li><strong>RFC:</strong> CHO123456XXX</li>
        <li><strong>Dirección:</strong> Av. Centro 123, Aguascalientes, México</li>
        <li><strong>Correo de Contacto:</strong> contacto@chocoselinge.com</li>
        <li><strong>Teléfono de Atención:</strong> +52 449 123 4567</li>
      </ul>

      <h2>Precios</h2>
      <p>Todos los precios publicados en este sitio incluyen IVA. El precio total se mostrará antes de confirmar el pedido.</p>

      <h2>Métodos de Pago Aceptados</h2>
      <ul>
        <li>Tarjeta de crédito y débito (Visa, Mastercard, AMEX)</li>
        <li>PayPal</li>
      </ul>

      <h2>Políticas de Entrega</h2>
      <p>
        Las entregas se realizan en horario laboral de lunes a sábado. Para pedidos locales, puedes recoger tu producto en tienda dentro del horario acordado (formato pick-up).
      </p>

      <h2>Política de Cancelaciones y Devoluciones</h2>
      <p>
        Puedes cancelar tu pedido antes de que sea enviado. Las devoluciones se aceptan dentro de los 7 días posteriores a la entrega, siempre que el producto no haya sido abierto o usado.
      </p>

      <h2>Jurisdicción</h2>
      <p>
        Este sitio opera conforme a las leyes mexicanas. En caso de disputa, ambas partes se someterán a la jurisdicción de los tribunales de Aguascalientes, México.
      </p>
    </div>
  );
};

export default IdentificacionEcommerce;
