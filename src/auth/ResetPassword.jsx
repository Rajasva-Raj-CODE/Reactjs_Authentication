import React, { useState } from "react";
import { TextField, Button, Box, Alert, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
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
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };

    if (!actualData.password || !actualData.password_confirmation) {
      setError({
        status: true,
        message: "All fields are required",
        type: "error",
      });
      return;
    }

    if (actualData.password !== actualData.password_confirmation) {
      setError({
        status: true,
        message: "Passwords do not match",
        type: "error",
      });
      return;
    }

    console.log(actualData);
    document.getElementById("password-reset-form").reset();
    setError({
      status: true,
      message: "Password Reset Successfully. Redirecting to Login page....",
      type: "success",
    });

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-form"
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="New Password"
              name="password"
              type="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password_confirmation"
              name="password_confirmation"
              label="New Confirm Password"
              type="password"
              autoFocus
            />
            <Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
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
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPassword;
