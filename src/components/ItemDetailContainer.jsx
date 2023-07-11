import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from '../data/product.json';
import { ItemDetail } from '../components/ItemDetail';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = data.find((item) => item.id.toString() === id);
    setProduct(foundProduct);
  }, [id]);

  return (
    <Container className="mt-4 mb-5">
      <h1 className="mt-4 mb-5">Detalles del producto</h1>
      {product ? (
        <ItemDetail dep={product} />
      ) : (
        <div>Cargando...</div>
      )}
    </Container>
  );
};