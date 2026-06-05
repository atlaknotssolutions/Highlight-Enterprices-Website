import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vision from "./Pages/Vision";
import Mission from "./Pages/Mission";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision" element={<Vision />} />
          <Route path="mission" element={<Mission />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
