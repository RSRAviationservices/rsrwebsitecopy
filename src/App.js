import React from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import Products from './Components/Products/Products';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className='kodchasan-regular'>
      <div className="header-nav-wrapper">
        <Header />
        <NavBar />
      </div>
     
      <div id="home" className="section">
        <Home />
      </div>
      <div id="team" className="section">
        <Team />
      </div>
      <div id="products" className="section">
        <Products />
      </div>
      <div id="Contact Us" className="section">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default App;