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
  const LogUser = (username, password) => {
    setLoading(true);
    Axios.post(API_URL + "auth/login", { username: username, password: password })
      .then((response) => {
        localStorage.setItem("local-user", username);
        localStorage.setItem("local-token", response.data.token);
        setLoading(false);
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);

        setErrorSubmit(error);
      });
    return errorSubmit;
  };
  /////////////////////////////////////////////////////////////

  ///////////////////Sing Up///////////////////////////////////
  const SingUpUser = (username, email, password, confir, country) => {
      setLoading(true);
      Axios.post(API_URL + "auth/signup", {
        email: username,
        email: email,
        password: password,
        confirm_password: confir,
        country: country,
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
