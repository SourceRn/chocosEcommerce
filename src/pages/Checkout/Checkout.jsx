import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { useCart } from '../../contexts/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotal, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/confirmation');
  };

  return (
    <form onSubmit={handleSubmit} className='checkout-form'>
      <h2>Resumen de pago</h2>

      <div className="checkout-summary">
        {cart.length === 0 ? (
          <p className="empty-cart">Tu carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="checkout-item">
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="checkout-total">
          <strong>Total:</strong> ${getTotal().toFixed(2)}
        </div>
      </div>

      <h3>Datos de pago</h3>

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
            className='expiration-input'
            required
          />
        </div>
        <div>
          <label>CVC</label>
          <input
            type="text"
            placeholder="123"
            pattern="\d{3}"
            className='cvc-input'
            required
          />
        </div>
      </div>

      <button type="submit">Finalizar compra</button>
    </form>
  );
};

export default Checkout;
