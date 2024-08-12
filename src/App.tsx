import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarDetails from "./pages/CarDetails";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import RentPage from "./pages/RentPage";
import CustomerRegister from "./pages/CustomerRegister";
import AccessPage from "./pages/AcessPage";
import Footer from "./components/Footer";
import Cars from "./pages/Cars";
import AboutUs from "./pages/AboutUs";

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<AccessPage />} />{" "}
				<Route path="/cars" element={<Cars />} />
				<Route path="/car-details/:id" element={<CarDetails />} />
				<Route path="/rent/:id" element={<RentPage />} />
				<Route path="/customer-register" element={<CustomerRegister />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
