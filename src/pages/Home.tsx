// src/pages/Home.tsx
import React from "react";
import CarList from "../components/CarList";

const Home: React.FC = () => {
	return (
		<div className="home">
			<h1>Bem vindo ao Marquinhos Veiculos</h1>
			<CarList />
		</div>
	);
};

export default Home;
