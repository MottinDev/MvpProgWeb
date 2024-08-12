import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutUs: React.FC = () => {
	const navigate = useNavigate();

	const handleBackToHome = () => {
		navigate("/");
	};

	return (
		<Container
			className="container"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				backgroundColor: "#f5f5f5",
				textAlign: "center",
				padding: 4,
			}}
		>
			<Typography variant="h3" gutterBottom sx={{ mb: 2, color: "#e53935" }}>
				Sobre Nós
			</Typography>
			<Box
				sx={{
					maxWidth: 600,
					marginBottom: 4,
					padding: 2,
					backgroundColor: "#ffffff",
					borderRadius: 2,
					boxShadow: 3,
				}}
			>
				<Typography variant="h5" gutterBottom>
					Trabalho de Faculdade
				</Typography>
				<Typography variant="body1" paragraph>
					Este projeto foi desenvolvido pelo aluno Gabriel Motti para a
					disciplina de Programação Web, ministrada pelo professor Artur
					Oliveira Gomes, na Universidade Federal de Mato Grosso do Sul - Campus
					Pantanal (UFMS - CPAN). O objetivo do trabalho é demonstrar a
					aplicação de conceitos de desenvolvimento web, incluindo o uso de
					React, TypeScript e boas práticas de programação.
				</Typography>
				<Typography variant="body1">
					Agradecemos a orientação e suporte do professor Artur Oliveira Gomes,
					e esperamos que este trabalho contribua para o aprendizado e
					crescimento no campo da programação web.
				</Typography>
			</Box>
			<Button variant="contained" color="primary" onClick={handleBackToHome}>
				Voltar para a Home
			</Button>
		</Container>
	);
};

export default AboutUs;
