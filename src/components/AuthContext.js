import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // Aquí asumes que tener un token es suficiente para estar autenticado
      // Dependiendo de tu backend, quizás quieras validar el token aquí
      setCurrentUser({ token }); // Guarda más datos de usuario si es necesario
      navigate('/home'); // Cambia '/home' por la ruta que desees
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
