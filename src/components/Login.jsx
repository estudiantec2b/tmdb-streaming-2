import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { user, login, logout } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (!success) {
      setError('Usuario o contraseña incorrectos');
    } else {
      setError('');
    }
  };

  if (user) {
    return (
      <div style={{ color: 'white' }}>
        <p>Bienvenido, {user.name}!</p>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ color: 'white' }}>
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Iniciar sesión</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;
