import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // A página principal com a lista de carros
import CarList from './components/CarList'; // Componente com a lista de carros
import CarDetails from './pages/CarDetails'; // Página de detalhes do carro
import NotFound from './pages/NotFound'; // Página 404 para URLs não encontradas
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
