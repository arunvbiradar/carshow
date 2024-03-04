import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Make from "./pages/Make";
import NotFound from "./pages/NotFound";
import AllMakes from "./pages/AllMakes";
import AllManufacturers from "./pages/AllManufacturers";
import Manufacturer from "./pages/Manufacturer";
import AllSpecifications from "./pages/AllSpecifications";
import Specification from "./pages/Specification";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AllMakes />} />
        <Route path="/make/:makeName/:makeId" element={<Make />} />
        <Route path="/all-manufacturers" element={<AllManufacturers />} />
        <Route path="/manufacturer/:name/:id" element={<Manufacturer />} />
        <Route path="/all-specifications" element={<AllSpecifications />} />
        <Route path="/specification/:name/:id" element={<Specification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
