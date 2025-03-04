import React, { useState } from "react";
import { TextField, Button, Box, Alert, Grid } from "@mui/material";

const SendPasswordResetEmail = () => {
  const [error, setError] = useState({
    status: false,
    message: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    
    };
    if (actualData.email) {
      console.log(actualData);
      document.getElementById("password-reset-email-form").reset();
      setError({
        status: true,
        message: "Password Reset Email Sent Check Your Email",
        type: "success",
      });
    } else {
      setError({
        status: true,
        message: "Please Provide Valid Email",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-email-form"
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send
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

export default SendPasswordResetEmail;
