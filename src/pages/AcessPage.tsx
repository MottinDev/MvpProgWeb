import React from "react";
import { Container, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccessPage: React.FC = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/cars");
	};

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				backgroundColor: "#f5f5f5",
				textAlign: "center",
			}}
		>
			<Box
				sx={{
					mb: 4,
				}}
			>
				<img
					src="/bem-vindo.jpeg"
					alt="Boas-vindas"
					style={{ width: "100%", borderRadius: "8px" }}
				/>
			</Box>
			<Button variant="contained" color="primary" onClick={handleClick}>
				Entrar
			</Button>
		</Container>
	);
};

export default AccessPage;
