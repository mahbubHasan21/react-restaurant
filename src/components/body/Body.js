import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </div>
  );
};

export default Body;
