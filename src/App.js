import React from "react";
import "./App.css";
import "./Components/UI-Components/ResponsiveQuery/responsive.css";
import Navbar from "./Components/Common/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Pages/Contact/Contact";
import Footer from "./Components/Common/Footer/Footer";
import Product from "./Components/Pages/Product/Product";
import Popup from "./Components/UI-Components/Popup/Popup";
function App() {
  return (
    <Router>
      <Navbar />
      <Popup />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/popup" element={<Popup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
