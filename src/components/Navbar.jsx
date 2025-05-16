import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaSearch, FaUser, FaGlobe } from 'react-icons/fa';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Al cargar, chequeamos localStorage para mantener sesión
    const savedUser = localStorage.getItem('peliverseUser');
    if (savedUser) setLoggedInUser(savedUser);
  }, []);

  const handleLoginClick = () => {
    if (loggedInUser) {
      // Logout
      localStorage.removeItem('peliverseUser');
      setLoggedInUser(null);
    } else {
      // Mostrar modal login
      setShowLoginModal(true);
    }
  };

  const handleLogin = (username) => {
    localStorage.setItem('peliverseUser', username);
    setLoggedInUser(username);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
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
          <button
            className="btn btn-outline-light btn-sm"
            onClick={handleLoginClick}
          >
            <FaUser style={{ marginRight: '5px' }} />
            {loggedInUser ? `Cerrar sesión (${loggedInUser})` : 'Iniciar sesión'}
          </button>
          <button className="btn btn-outline-light btn-sm mx-2">
            <FaGlobe style={{ marginRight: '5px' }} /> ES
          </button>
        </div>
      </nav>

      <LoginModal
        show={showLoginModal}
        handleClose={handleCloseModal}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navbar;
