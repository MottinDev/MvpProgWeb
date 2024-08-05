// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem vindo ao Marquinhos Veiculos</h1>
      <p><Link to="/cars">Ver Lista de Carros</Link></p>
    </div>
  );
};

export default Home;
