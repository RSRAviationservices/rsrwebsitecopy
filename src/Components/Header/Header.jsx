import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Import CSS for styling
import logo from '../../Resource/logo.png';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUpClick = () => {
    navigate('/login'); // Navigate to the login page
  };
  const handleCartOnClick=() =>{
    navigate('/Cart');
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="RSR Aviation Services Logo" />
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">
            <FaSearch className="icon" />
          </button>
        </div>
        <div className="header-buttons">
          <button className="cart-button" onClick={handleCartOnClick}>
            <FaShoppingCart className="icon" />
          </button>
          <button className="user-button" onClick={handleSignUpClick}>
            <FaUser className="icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;