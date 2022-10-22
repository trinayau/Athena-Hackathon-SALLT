import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../components/logo.png";
//mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
const settings = ["Home", "About", "Usage", "Contact"];



const NavBar = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    
      const handleLink = (link) => {
        handleCloseNavMenu();
        handleCloseUserMenu();
        navigate(link);
      };
    

    return ( <>
    <AppBar elevation={0} position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* only displays if above medium breakpoint */}
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            src={logo}
            className="logo"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => handleLink("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              fontSize: "1.5rem",
              color: "black",
              textDecoration: "none",
            }}
            style={{color:"black"}}
          >
            FullFill
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
        
                <MenuItem key='Locator' onClick={()=>{handleLink('/locator')}}>
                  <Typography textAlign="center">Locator</Typography>
                </MenuItem>
                <MenuItem key='Donation' onClick={()=>{handleLink('/donation')}}>
                  <Typography textAlign="center">Donation</Typography>
                </MenuItem>
                <MenuItem key='Recipes' onClick={()=>{handleLink('/recipes')}}>
                  <Typography textAlign="center">Recipes</Typography>
                </MenuItem>
                <MenuItem key='Community' onClick={()=>{handleLink('/communities')}}>
                  <Typography textAlign="center">Community</Typography>
                </MenuItem>
            </Menu> */}
          </Box>
          {/* Only displays for mobile */}
          <Box src={logo} sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
            style={{
              color:"black"
            }}
          >
            FullFill
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={(e) => {
                handleLink("/");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Home
            </Button>
            <Button
              onClick={(e) => {
                handleLink("/about");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              About
            </Button>
            <Button
              onClick={(e) => {
                handleLink("/results");
              }}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Result
            </Button>
            
            <nav></nav>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>

    </> );
}
 
export default NavBar;
