// src/Components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaBoxOpen, FaHandshake, FaInfoCircle, FaUserFriends } from 'react-icons/fa'; // Importing Font Awesome icons
import './NavBar.css'; // Import CSS for styling

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link kodchasan-regular">
            <FaHome className="nav-icon" /> <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutUs" className="nav-link kodchasan-regular">
            <FaInfoCircle className="nav-icon" /> <span>About Us</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link kodchasan-regular">
            <FaUsers className="nav-icon" /> <span>Our Team</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/customers" className="nav-link kodchasan-regular">
            <FaUserFriends className="nav-icon" /> <span>Our Customers</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link kodchasan-regular">
            <FaBoxOpen className="nav-icon" /> <span>Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactUs" className="nav-link kodchasan-regular">
            <FaHandshake className="nav-icon" /> <span>Contact Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
