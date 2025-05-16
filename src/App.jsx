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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MovieProvider>
    </Router>
  );
}

export default App;
