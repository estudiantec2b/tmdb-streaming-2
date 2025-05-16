<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import { MovieProvider } from "./context/MovieContext"; // 👈 Importa el provider

function App() {
  return (
    <Router>
      <MovieProvider> {/* 👈 Debe envolver todo */}
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';

function App() {
  return (
    <MovieProvider>
      <Router>
>>>>>>> main
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        </Routes>
      </MovieProvider>
    </Router>
=======
          <Route path="/peliculas" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="tv" />} />
          <Route path="/documentales" element={<Home type="documentary" />} />
        </Routes>
      </Router>
    </MovieProvider>
>>>>>>> main
  );
}

export default App;
