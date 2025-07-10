import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.css'; // Assuming you have a CSS file for styling
import { products } from '../../data/products'; // Importing products data

const ProductList = () => {
  
  return (
    <section className="product-list">
      <h2>Todos los productos</h2>
      <div className="product-grid">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
};

export default ProductList;