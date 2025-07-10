import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProductList from '../pages/ProductList/ProductList';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import Confirmation from '../pages/Confirmation/Confirmation';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductList />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/confirmation" element={<Confirmation />} />
  </Routes>
);

export default AppRouter;