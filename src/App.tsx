import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Make from "./pages/Make";
import NotFound from "./pages/NotFound";
import Model from "./pages/Model";
import AllModels from "./pages/AllModels";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make" element={<Make />} />
        <Route path="/model" element={<Model />} />
        <Route path="/all-models" element={<AllModels />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;