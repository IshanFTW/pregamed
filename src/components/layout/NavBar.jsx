import { useState } from "react"
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import { styled } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"

// Import your logo
import logo from "../../assests/Logo.png" // Adjust the path as needed

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "rgba(255, 255, 255, 0.98)",
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
}))

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
})

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& img": {
    width: 40,
    height: 40,
    marginRight: theme.spacing(1),
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}))

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: "0.9rem",
  textTransform: "none",
  padding: "6px 12px",
  marginLeft: theme.spacing(2),
  borderRadius: "20px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(26, 95, 122, 0.08)",
    transform: "translateY(-2px)",
  },
}))

const BookButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontWeight: 600,
  textTransform: "none",
  padding: "8px 20px",
  borderRadius: "25px",
  marginLeft: theme.spacing(3),
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "translateY(-2px)",
    boxShadow: "0 4px 10px rgba(26, 95, 122, 0.3)",
  },
}))

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Dashboard", path: "/dashboard" },
  ]

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <StyledToolbar disableGutters>
          <LogoContainer component={Link} to="/" sx={{ textDecoration: "none" }}>
            <img src={logo || "/placeholder.svg"} alt="Pregamed Logo" />
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "-0.5px" }}
            >
              Pregamed
            </Typography>
          </LogoContainer>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {menuItems.map((item) => (
              <NavButton key={item.label} component={Link} to={item.path}>
                {item.label}
              </NavButton>
            ))}
            <BookButton variant="contained" component={Link} to="/book">
              Book Now
            </BookButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.label} onClick={handleCloseNavMenu} component={Link} to={item.path}>
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/book">
                <Typography textAlign="center" sx={{ fontWeight: 600, color: "primary.main" }}>
                  Book Now
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  )
}

