import React from 'react';
import { Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';

const Home = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="body1" paragraph>
          This is a simple home page built using Material UI.
        </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
