import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import Home from "./Home";

// use Drawer component Mui to interact with responsive
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Home />
      </Box>
    </ThemeProvider>
  );
}

declare module "@mui/material/styles" {
  interface Theme {
    typography: {
      fontFamily: string;
    };
  }
  // allow configuration using `createTheme`
  // interface ThemeOptions {
  //   typography?: {
  //     fontFamily?: string;
  //   };
  // }
}
export const theme = createTheme({
  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
  },
});
export default App;
