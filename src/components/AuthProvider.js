import React from "react";
import { useState, useContext } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/env"

const LoginContext = React.createContext();
const LogOutContext = React.createContext();
const AuthUserContext = React.createContext();
const SingUpUserContext = React.createContext();

export const useLoginContext = () => {
  return useContext(LoginContext);
};
export const useLogOutContext = () => {
  return useContext(LogOutContext);
};
export const useSingUpUserContext = () => {
  return useContext(SingUpUserContext);
};
export const useAuthUserContext = () => {
  return useContext(AuthUserContext);
};

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [errorSubmit, setErrorSubmit] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  /////////////////User Auth/////////////////////////////////
  const AuthUser = () => {
    Axios.get(API_URL + "auth/check")
      .then((response) => {
        setAuth(true);
      })
      .catch((error) => {
        setAuth(false);
      });
    return auth;
  };
  /////////////////////////////////////////////////////////////

  ///////////////////Log In///////////////////////////////////
  const LogUser = async (username, password) => {
    setLoading(true);
    try {
      const response = await Axios.post(API_URL + "auth/login", { username: username, password: password });
      localStorage.setItem("local-user", username);
      localStorage.setItem("local-token", response.data.token);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      // Aquí, debes decidir qué quieres retornar o si lanzar un error.
      if (error.response && error.response.status === 404) {
        return "Comprueba tu contraseña y nombre de cuenta e inténtalo de nuevo."; // Retorno de un mensaje de error específico.
      } else {
        return "Error de conexión con el servidor"; // Manejo de otros tipos de errores.
      }
    } finally {
      setLoading(false);
    }
  };
  
  /////////////////////////////////////////////////////////////

  ///////////////////Sing Up///////////////////////////////////
  const SingUpUser = (username, email, password, country) => {
      setLoading(true);
      Axios.post(API_URL + "auth/signup", {
        userName: username,
        email: email,
        password: password,
        country: country
      })
        .then((response) => {
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          setErrorSubmit(error);
        });
  };
  /////////////////////////////////////////////////////////////

  /////////////////Login Out/////////////////////////////////
  const LogOutUser = (sumiterror) => {
      setLoading(true);
      localStorage.removeItem("local-token");
      localStorage.removeItem("local-user");
      setAuth(false);
      setLoading(false);
      navigate("/");
  };
  ///////////////////////////////////////////////////////////

  return (
    <>
      <LoginContext.Provider value={LogUser}>
        <SingUpUserContext.Provider value={SingUpUser}>
          <AuthUserContext.Provider value={AuthUser}>
            <LogOutContext.Provider value={LogOutUser}>
              {children}
            </LogOutContext.Provider>
          </AuthUserContext.Provider>
        </SingUpUserContext.Provider>
      </LoginContext.Provider>
    </>
  );
}
