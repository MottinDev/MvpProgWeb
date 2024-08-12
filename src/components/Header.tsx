import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import InfoIcon from "@mui/icons-material/Info";

const Header: React.FC = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar style={{ padding: 3 }}>
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
						Marquinhos Veículos
					</Link>
				</Typography>
				<Box sx={{ display: { xs: "flex", md: "none" } }}>
					<Button
						id="basic-button"
						aria-controls="basic-menu"
						aria-haspopup="true"
						aria-expanded={anchorElNav ? "true" : undefined}
						onClick={handleOpenNavMenu}
						color="inherit"
					>
						<MenuIcon />
					</Button>
					<Menu
						id="basic-menu"
						anchorEl={anchorElNav}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
							<HomeIcon sx={{ marginRight: 1 }} />
							Home
						</MenuItem>
						<MenuItem onClick={handleCloseNavMenu} component={Link} to="/cars">
							<CarRepairIcon sx={{ marginRight: 1 }} />
							Carros
						</MenuItem>
						<MenuItem onClick={handleCloseNavMenu} component={Link} to="/about">
							<InfoIcon sx={{ marginRight: 1 }} />
							Sobre
						</MenuItem>
					</Menu>
				</Box>
				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					<Button color="inherit" component={Link} to="/">
						<HomeIcon sx={{ marginRight: 1 }} />
						Home
					</Button>
					<Button color="inherit" component={Link} to="/cars">
						<CarRepairIcon sx={{ marginRight: 1 }} />
						Carros
					</Button>
					<Button color="inherit" component={Link} to="/about">
						<InfoIcon sx={{ marginRight: 1 }} />
						Sobre
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
