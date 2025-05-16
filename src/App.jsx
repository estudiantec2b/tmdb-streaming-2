import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import { MovieProvider } from "./context/MovieContext";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <MovieProvider> {/* 👈 Debe envolver todo */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </MovieProvider>
    </Router>
  );
}

export default App;
