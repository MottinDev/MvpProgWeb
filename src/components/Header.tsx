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
					Marquinhos Veículos
				</Typography>
				<Box sx={{ display: { xs: "flex", md: "none" } }}>
					<Button
						id="basic-button"
						aria-controls="basic-menu"
						aria-haspopup="true"
						aria-expanded={anchorElNav ? "true" : undefined}
						onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
							handleOpenNavMenu(event)
						}
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
						<MenuItem onClick={handleCloseNavMenu}>
							<Link to="/">Home</Link>
						</MenuItem>
						<MenuItem onClick={handleCloseNavMenu}>
							<Link to="/cars">Carros</Link>
						</MenuItem>
						<MenuItem onClick={handleCloseNavMenu}>
							<Link to="/profile">Perfil</Link>
						</MenuItem>
					</Menu>
				</Box>
				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					<Button color="inherit" component={Link} to="/">
						Home
					</Button>
					<Button color="inherit" component={Link} to="/cars">
						Carros
					</Button>
					<Button color="inherit" component={Link} to="/profile">
						Perfil
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
