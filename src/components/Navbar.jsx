import React from 'react';
import './Navbar.css';
import { FaSearch, FaUser, FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar container-fluid">
      <div className="navbar-left">
        <img
          src="/images/logo-peliverse.png"
          alt="logo peliverse"
          className="navbar-logo"
        />
      </div>

      <div className="navbar-center">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Buscar películas..." />
        </div>
      </div>

      <div className="navbar-right">
        <button className="btn btn-outline-light btn-sm">
          <FaUser style={{ marginRight: '5px' }} /> Iniciar sesión
        </button>
        <button className="btn btn-outline-light btn-sm mx-2">
          <FaGlobe style={{ marginRight: '5px' }} /> ES
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
