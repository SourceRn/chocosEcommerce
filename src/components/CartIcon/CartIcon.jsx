import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart">
      🛒 ({totalItems})
    </Link>
  );
};

export default CartIcon;