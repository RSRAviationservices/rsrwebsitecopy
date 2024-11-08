
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import  Products  from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import Login from './Components/login/login';
import Cart from './Components/Cart/Cart';
import ContactUs from './Components/ContactUs/ContactUs'
import './App.css';
import AboutUsMain from './Components/AboutUsMain/AboutUsMain';
import Customers from './Components/Customers/Customers';

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Routes> 
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Customers" element={<Customers/>}/>
        <Route path="/aboutUs" element={<AboutUsMain/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
     </>  
 
  );
};

export default App;
