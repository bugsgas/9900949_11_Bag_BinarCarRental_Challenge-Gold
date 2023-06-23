// important import
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Cars from "./pages/Cars.Jsx";
import DetailCars from "./pages/DetailCars";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/detail/:id" element={<DetailCars />} />
      </Routes>
    </BrowserRouter>
  );
}
