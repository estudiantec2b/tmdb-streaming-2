import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/peliculas" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="tv" />} />
          <Route path="/documentales" element={<Home type="documentary" />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
