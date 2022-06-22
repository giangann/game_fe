import { Box, Grid } from "@mui/material";
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Content />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
