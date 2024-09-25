import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import AboutPage from "./AboutPage";
import Header from "./Header";
import ServicePage from "./ServicePage";
import ContactPage from "./ContactPage";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add other routes as needed */}
      </Routes>
      
    </Router>
  );
}

export default App;
