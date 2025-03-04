import React, { useState } from "react";
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import pic1 from "../assets/pic1.svg";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container sx={{ height: "90vh" }}>
      <Grid
        item
        lg={7}
        sm={5}
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5", // Light background to blend well
          height: "100vh",
        }}
      >
        <img
          src={pic1}
          alt="Illustration"
        />
      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                textColor="secondary"
                indicatorColor="secondary"
                onChange={handleChange}
              >
                <Tab
                  label="Login"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                ></Tab>
                <Tab
                  label="Registration"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                ></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              User Login
            </TabPanel>
            <TabPanel value={value} index={1}>
              Registration
            </TabPanel>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginReg;
