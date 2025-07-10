import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <Link to="/" >Inicio</Link>
      <Link to="/products" >Productos</Link>
      <Link to="/cart" >Carrito</Link>
    </nav>
    <CartIcon />
  </header>
);

export default Header;