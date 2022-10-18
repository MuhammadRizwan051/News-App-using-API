import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Product from "../screens/product";
import "../App.css";



function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product' element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
