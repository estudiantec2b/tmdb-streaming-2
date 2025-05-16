import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';

const Navbar = () => {
  const { user, setUser } = useMovieContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">
        <img
          src="./public/images/logo-peliverse.png"
          alt="Logo"
          height="50"
          style={{backgroundColor: 'white'}}
        />
      </Link>

      <div className="d-flex align-items-center gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar..."
          style={{ maxWidth: 200 }}
        />

        {user ? (
          <>
            <span className="text-white">Hola, {user.username}</span>
            <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline-light btn-sm">
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
