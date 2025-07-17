import React, { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './CartIcon.css';

const CartIcon = () => {
  const { cart } = useCart();
  const [isBumping, setIsBumping] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Animación al agregar productos
  useEffect(() => {
    if (cart.length === 0) return;

    setIsBumping(true);
    const timer = setTimeout(() => setIsBumping(false), 300);

    return () => clearTimeout(timer);
  }, [cart]);

  return (
    <Link to="/cart" className={`cart-icon ${isBumping ? 'bump' : ''}`}>
      <FaShoppingCart size={24} />
      <span className="badge">{totalItems}</span>
    </Link>
  );
};

export default CartIcon;
