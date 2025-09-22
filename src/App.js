import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/login/login";
import Cart from "./Components/Cart/Cart";
import ContactUs from "./Components/ContactUs/ContactUs";
import "./App.css";
import AboutUsMain from "./Components/AboutUsMain/AboutUsMain";
import Customers from "./Components/Customers/Customers";
import posterImage from "./Resource/poster.svg";
import Services from "./Components/Services/Services";
import MediaCareer from "./Components/MediaCareer/MediaCareer";

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    setIsPopupVisible(false);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <>
      <Header />
      <NavBar />
      {isPopupVisible && (
        <div className="popup-modal">
          <div className="popup-content">
            <img
              src={posterImage} // Replace with the actual image path
              alt="Welcome"
              className="popup-image"
            />
            <button onClick={closePopup} className="popup-close-button">
              X
            </button>
          </div>
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/aboutUs" element={<AboutUsMain />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<MediaCareer />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
