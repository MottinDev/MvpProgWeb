// src/pages/CarDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Simulação de dados com base no ID
  // Em um projeto real, você buscaria essas informações de um backend ou localmente
  const car = {
    name: 'Example Car',
    model: 'Example Model',
    imageUrl: '/static/images/avatar/1.jpg',
    description: 'Detailed description of the car.',
  };

  return (
    <div>
      <h1>{car.name}</h1>
      <img src={car.imageUrl} alt={car.name} />
      <p>Model: {car.model}</p>
      <p>{car.description}</p>
      <a href="/cars">Back to Car List</a>
    </div>
  );
};

export default CarDetails;
