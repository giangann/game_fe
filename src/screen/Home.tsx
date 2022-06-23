import { Box, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Content from "./AddMoney";
import Header from "../component/Layout/Header";
import Sidebar from "../component/Layout/Sidebar";
import { color } from "styles";

function Home() {
  return (
    <Box sx={{ minHeight: "100vh", height:'fit-content' }}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={10}
          sx={{ backgroundColor: color.background, height: "100vh" }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
