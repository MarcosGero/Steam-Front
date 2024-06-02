import React from "react";
import { useState, useContext } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/env"
import Loader from "./Loader";
const LoginContext = React.createContext();
const LogOutContext = React.createContext();
const AuthUserContext = React.createContext();
const SingUpUserContext = React.createContext();
const requestPasswordContext = React.createContext();

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
export const usePasswordResetContext = () => {
    return useContext(requestPasswordContext);
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
      const userdata = await Axios.get(API_URL + "user/me");
      localStorage.setItem("local-picture",userdata.data.image);
      localStorage.setItem("local-format",userdata.data.imageMimeType);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      // Si no encuentra al usuario (404) entonces se le pide que vuelva a escribir el usuario y contraseña
      if (error.response && error.response.status === 404) {
        return "Comprueba tu contraseña y nombre de cuenta e inténtalo de nuevo.";
      } else {
        return "Error de conexión con el servidor"; // En otros caso suponemos errores en la conexion con el servidor
      }
    } finally {
      setLoading(false);
    }
  };
    /////////////////////////////////////////////////////////////

    ///////////////////Password recovery///////////////////////////////////
    const requestPasswordReset = async (email) => {
        setLoading(true);
        try {
            const response = await Axios.post(API_URL + "password-reset/request", { email });
            return "Solicitud enviada, revisa tu correo electrónico.";
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 404) {
                return "Correo no encontrado.";
            } else {
                return "Error de conexión con el servidor.";
            }
        } finally {
            setLoading(false);
        }
    };
  /////////////////////////////////////////////////////////////

  ///////////////////Sing Up///////////////////////////////////
  const SingUpUser = (username, email, password, country) => { // Tomamos de parametros el nombre de usuario, email, contraseña y pais
      setLoading(true);
      Axios.post(API_URL + "auth/signup", { // Realizamos una peticion POST al servidor para que almacene al usuario
        userName: username,
        email: email,
        password: password,
        country: country
      })
        .then((response) => { // Si se realizo correctamente lo lleva a una pagina que le pide que confirme su correo (se le envia un correo)
          setLoading(false);
          navigate("/verificar-email");
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
      localStorage.removeItem("local-token"); // Si el usuario sale de su sesion entonces se elimina su token
      localStorage.removeItem("local-user");
      setAuth(false);
      setLoading(false);
      navigate("/"); // Se vuelve a la pagina para iniciar sesion
  };
  ///////////////////////////////////////////////////////////

  return (
    <>
      <LoginContext.Provider value={LogUser}>
      <requestPasswordContext.Provider value={{requestPasswordReset}}>
        <SingUpUserContext.Provider value={SingUpUser}>
          <AuthUserContext.Provider value={AuthUser}>
            <LogOutContext.Provider value={LogOutUser}>
              {children}
            </LogOutContext.Provider>
          </AuthUserContext.Provider>
        </SingUpUserContext.Provider>
      </requestPasswordContext.Provider>
      </LoginContext.Provider>
    </>
  );
}
