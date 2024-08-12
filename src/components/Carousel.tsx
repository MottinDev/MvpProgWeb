import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const images = [
	"/carousel/promo1.jpeg",
	"/carousel/promo2.jpeg",
	"/carousel/promo3.jpeg",
];

const Carousel: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: "400px",
				overflow: "hidden",
			}}
		>
			<Box
				component="img"
				src={images[currentIndex]}
				alt={`Image ${currentIndex + 1}`}
				sx={{ width: "100%", height: "100%", objectFit: "fit" }}
			/>
			<IconButton
				onClick={handlePrev}
				sx={{
					position: "absolute",
					top: "50%",
					left: "10px",
					transform: "translateY(-50%)",
					color: "#fff",
					backgroundColor: "rgba(0,0,0,0.5)",
					"&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
				}}
			>
				<ArrowBackIos />
			</IconButton>
			<IconButton
				onClick={handleNext}
				sx={{
					position: "absolute",
					top: "50%",
					right: "10px",
					transform: "translateY(-50%)",
					color: "#fff",
					backgroundColor: "rgba(0,0,0,0.5)",
					"&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
				}}
			>
				<ArrowForwardIos />
			</IconButton>
		</Box>
	);
};

export default Carousel;
