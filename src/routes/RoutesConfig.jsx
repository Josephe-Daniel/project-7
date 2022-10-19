import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Lodging from "../pages/Lodging";
import About from "../pages/About";
import Error404 from "../pages/Error404";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lodging/:id" element={<Lodging />} />
      <Route path="/about" element={<About />} />
      {/* path = "*" is for all other url adresses that non exist */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RoutesConfig;
