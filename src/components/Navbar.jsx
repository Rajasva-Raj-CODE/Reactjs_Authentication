import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import img from "../assets/auth.gif";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src={img}
              alt="Logo"
              style={{
                height: "50px",
                width: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Autentication App
            </Typography>
          </Box>

          {/* Navigation Buttons */}
          <Box>
            <Button
              color="inherit"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "none",
              }}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#6d1b7b" : "",
              })}
              component={NavLink}
              to="/"
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "none",
              }}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#6d1b7b" : "",
              })}
              component={NavLink}
              to="/contact"
            >
              Contact
            </Button>
            <Button
              color="inherit"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "none",
              }}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#6d1b7b" : "",
              })}
              component={NavLink}
              to="/login"
            >
              Login/Registration
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
