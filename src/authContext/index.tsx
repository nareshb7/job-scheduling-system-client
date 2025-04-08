import Welcome from "pages/welcome";
import React, { createContext, useContext, useState } from "react";

export interface AuthContextProps {
  isLoggedin: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export interface AuthProviderProps {
  children: React.JSX.Element;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedin, setIsLoggedIn }}>
      {isLoggedin ? children : <Welcome />}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext) as AuthContextProps;

export default AuthProvider;
