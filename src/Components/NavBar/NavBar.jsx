import React from 'react';
import { FaHome, FaUsers, FaBoxOpen, FaHandshake } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home" className="nav-link">
            <FaHome className="nav-icon" /> Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#team" className="nav-link">
            <FaUsers className="nav-icon" /> Our Team
          </a>
        </li>
        <li className="nav-item">
          <a href="#products" className="nav-link">
            <FaBoxOpen className="nav-icon" /> Products
          </a>
        </li>
        <li className="nav-item">
          <a href="#partners" className="nav-link">
            <FaHandshake className="nav-icon" /> Our Partners
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
