import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };

    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.tc !== null) 
     {if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          message: "Registration Successful",
          type: "success",
        });
        navigate("/dashboard");
      } else {
        setError({
          status: true,
          message: "Passwords do not match",
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        message: "All fields are required",
        type: "error",
      });
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="registration-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          autoFocus
        />
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" id="tc" name="tc" />}
          label="I agree to the Terms and Conditions"
        />
        <Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            JOIN
          </Button>
        </Box>

        {error.status ? (
          <Alert severity={error.type} sx={{ mt: 3, mb: 2 }}>
            {error.message}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Registration;
