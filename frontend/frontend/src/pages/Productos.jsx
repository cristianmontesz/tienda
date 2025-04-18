import React from 'react';
import ProductoList from '../components/ProductoList'; 

const Productos = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Gestión de Productos</h2>
      <ProductoList />
    </div>
  );
};

export default Productos;
