import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About";
import Navbar from "./Navbar";
import Products from "../pages/Products.js";
import Cart from "../pages/Cart.js";
import Footer from "./Footer.js";

export default function Dashboard() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}
