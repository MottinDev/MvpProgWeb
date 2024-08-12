import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
	return (
		<Container
			maxWidth="xs"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
			}}
		>
			<Box
				sx={{
					textAlign: "center",
					padding: 3,
					borderRadius: 2,
				}}
			>
				<Typography
					variant="h1"
					component="h1"
					sx={{ fontSize: 80, marginBottom: 2 }}
				>
					404
				</Typography>
				<Typography variant="h5" component="p" sx={{ marginBottom: 2 }}>
					Página Não Encontrada
				</Typography>
				<Button variant="contained" color="primary" component={Link} to="/">
					Voltar para Home
				</Button>
			</Box>
		</Container>
	);
};

export default NotFound;
