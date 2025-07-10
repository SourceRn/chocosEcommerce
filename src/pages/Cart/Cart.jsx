import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'; // Assuming you have a CSS file for styling

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div className='cart-container'>
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x{item.quantity} - ${item.price * item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3 className='cart-total'>Total: ${getTotal()}</h3>
      <Link to="/checkout">Ir a pagar</Link>
    </div>
  );
};

export default Cart;