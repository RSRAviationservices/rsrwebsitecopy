import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import  Products  from './Components/Products/Products';
import Partners from './Components/partners/Partners';
import Footer from './Components/Footer/Footer';
import Login from './Components/login/login';
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes> 
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
      <Footer />
      
    </Router>
  );
};

export default App;
