import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, getTotal, addToCart } = useCart();

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 });
    } else {
      removeFromCart(item.id);
    }
  };

  const total = getTotal();

  return (
    <div className='cart-container'>
      <h2>Carrito de Compra</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart({ ...item, quantity: 1 })}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </div>
              <div className="cart-img">
                <img src={item.image} alt={item.name} />
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-footer">
        <h3 className='cart-total'>Total: ${total.toFixed(2)}</h3>
        {total > 0 ? (
          <Link to="/checkout" className="checkout-btn">Pagar ahora</Link>
        ) : (
          <button className="checkout-btn disabled" disabled>
            Agrega productos para continuar
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
