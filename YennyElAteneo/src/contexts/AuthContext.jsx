import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [is_admin, setIsAdmin] = useState(false);
  const [is_logueado, setIsLogueado] = useState(false);

  const login = ({ access_token, refresh_token }) => {
    setToken(access_token);
    localStorage.setItem("refresh_token", refresh_token);
    setIsLogueado(true);
    checkIsAdmin(access_token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("refresh_token");
    setIsLogueado(false); 
    setIsAdmin(false);
  };

  const checkIsAdmin = async (verifyToken) => {
    try {
      const res = await axios.get("http://localhost:5000/users/checkisadmin", {
        headers: {
          Authorization: `Bearer ${verifyToken}`,
        },
      });
      const { success, is_admin_check } = res.data;
      if (success) {
        setIsAdmin(is_admin_check);
      }
    } catch (err) {
      console.error("Error al verificar admin:", err);
    }
  };

  const getToken = async () => {
    if (localStorage.getItem("refresh_token")) {
      try {
        const res = await axios.get("http://localhost:5000/users/refresh", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
          },
        });
        const { success, access_token } = res.data;

        if (success) {
          setToken(access_token);
          setIsLogueado(success);
          checkIsAdmin(access_token);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ is_logueado, token, is_admin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
