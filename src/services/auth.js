export const login = (email, password) => {
  // Usuario ficticio
  const user = {
    email: 'usuario@demo.com',
    password: '123456',
  };

  if (email === user.email && password === user.password) {
    localStorage.setItem('user', JSON.stringify({ email }));
    return true;
  }

  return false;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('user');
};
