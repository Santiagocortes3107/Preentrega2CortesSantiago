import React from 'react';
import data from '../data/product.json';

export const ItemDetail = ({ dep }) => {
  const product = data.find((item) => item.id === dep.id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <div className= "h2 mb-5 mt-6">{product.dep_productos}</div>
        <div className= "h3 mb-5">{product.dep_precio}</div>
        <div className= "h4 mb-5">{product.dep_stock}</div>
        <div className= "h5 mb-5">{product.category}</div>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={product.img} alt={product.dep_productos} />
      </div>
    </div>
  );
};