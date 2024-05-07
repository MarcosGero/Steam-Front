import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import * as jwt_decode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

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
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Tiempo actual en segundos

      if (decoded.exp < currentTime) {
        // El token ha expirado
        localStorage.removeItem('jwtToken'); // Opcionalmente remueve el token expirado
        setCurrentUser(null);
        navigate('/'); // Redirigir a la página de login
      } else {
        // El token es válido y no ha expirado
        setCurrentUser({ token }); // Guarda más datos de usuario si es necesario
        navigate('/home'); // Cambia '/home' por la ruta que desees
      }
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
