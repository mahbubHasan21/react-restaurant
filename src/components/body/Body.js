import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Menu from "./Menu";
const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Body;
