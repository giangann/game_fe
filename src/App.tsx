import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import Home from "./screen/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Content from "screen/AddMoney";
import Figure from "screen/Figure";
import Login from "screen/Login";

// use Drawer component Mui to interact with responsive
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="home" element={<Home />}>
            <Route path="add-money" element={<Content />} />
            <Route path="figure" element={<Figure />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
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
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default App;
