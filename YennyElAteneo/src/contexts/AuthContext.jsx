import axios from "axios";
import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [is_logueado, setIsLogueado] = useState(false);

  const login = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });

    setUser(res.data);
    setIsLogueado(true);
    return true;
  } catch (err) {
    console.error("Error de login:", err.response?.data?.error || err.message);
    return false;
  }
};

  const logout = () => {
    setIsLogueado(false);
  };

  return (
    <AuthContext.Provider value={{ is_logueado, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
