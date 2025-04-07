import React, { createContext, useContext, useState } from "react";
import Login from "../pages/login";

const AuthContext = createContext(null);

export interface AuthProviderProps {
  children: React.JSX.Element;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={null}>
      {isLoggedin ? children : <Login />}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
