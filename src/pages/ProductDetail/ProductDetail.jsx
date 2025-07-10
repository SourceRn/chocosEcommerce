import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { products } from '../../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className='product-detail'>
      <img src={product.image} alt={product.name}/>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductDetail;
