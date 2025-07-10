import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos al backend
    navigate('/confirmation');
  };

  return (
    <form onSubmit={handleSubmit} className='checkout-form'>
      <h2>Pago</h2>

      <label>Nombre completo</label>
      <input type="text" placeholder="Juan Pérez" required />

      <label>Correo electrónico</label>
      <input type="email" placeholder="juan@email.com" required />

      <label>Número de tarjeta</label>
      <input
        type="text"
        placeholder="1234 5678 9012 3456"
        pattern="\d{4} \d{4} \d{4} \d{4}"
        required
      />

      <div className="payment-row">
        <div>
          <label>Expiración</label>
          <input
            type="text"
            placeholder="MM/AA"
            pattern="\d{2}/\d{2}"
            required
          />
        </div>
        <div>
          <label>CVC</label>
          <input
            type="text"
            placeholder="123"
            pattern="\d{3}"
            required
          />
        </div>
      </div>

      <button type="submit">Finalizar compra</button>
    </form>
  );
};

export default Checkout;
