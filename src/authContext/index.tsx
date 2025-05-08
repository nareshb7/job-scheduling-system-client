import Spinner from "common/spinner";
import AuthPage from "pages/welcome";
import { createContext, useContext, useEffect, useState } from "react";
import httpMethods from "service/index";
import { CURRENT_THEME, CURRENT_USER_KEY } from "utils/constants";
import { AuthContextProps, AuthProviderProps, User } from "./types";
import { useDispatch } from "react-redux";
import { setResumesList } from "store/reducers/resumeSlice";
import {
  setApplications,
  setPortalApplications,
} from "store/reducers/applicationSlice";

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useDispatch();
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentuser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const theme = isDarkMode ? "dark" : "light";
  const handleLoginSuccess = (data: User) => {
    setCurrentUser(data);
    setIsLoggedIn(true);
  };
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem(
      CURRENT_THEME,
      JSON.stringify(!isDarkMode ? "dark" : "light")
    );
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
    window.postMessage({ type: "SET_USER_ID", userId: "" }, "*");
  };

  const getApplications = async () => {
    try {
      const { data } = await httpMethods.get(
        `/applications/${currentuser?._id}`
      );
      dispatch(setApplications(data));
    } catch (err: any) {
      console.error("get_applications_error:", err.message);
    }
  };
  const getPortalApplications = async () => {
    try {
      const { data } = await httpMethods.get("/portal/" + currentuser?._id);
      dispatch(setPortalApplications(data));
    } catch (err: any) {
      console.error("get_portal_applications_error:", err.message);
    }
  };
  const fetchResumes = async () => {
    try {
      const { data } = await httpMethods.get(
        "/resume/list/" + currentuser?._id
      );
      dispatch(setResumesList(data));
    } catch (err: any) {
      console.error("fetch_resume_error:", err.message);
    }
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      const userId = localStorage.getItem(CURRENT_USER_KEY);
      if (!userId) {
        return;
      }
      const id = JSON.parse(userId);
      window.postMessage({ type: "SET_USER_ID", userId: id }, "*");

      try {
        setIsLoading(true);
        const { data } = await httpMethods.get(`/user/${id}`);

        if (data._id) {
          setIsLoggedIn(true);
          setCurrentUser(data);
        }
      } catch (err: any) {
        console.error("auth_login_err::", err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCurrentUser();
    const prevTheme = localStorage.getItem(CURRENT_THEME);
    if (prevTheme) {
      setIsDarkMode(JSON.parse(prevTheme) === "dark" ? true : false);
    }
  }, []);

  useEffect(() => {
    if (currentuser?._id) {
      getApplications();
      fetchResumes();
      getPortalApplications();
    }
  }, [currentuser?._id]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <AuthContext.Provider
      value={{
        theme,
        currentuser,
        isLoggedin,
        setIsLoggedIn,
        toggleTheme,
        handleLogout,
        fetchResumes,
        getApplications,
        getPortalApplications,
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : isLoggedin ? (
        children
      ) : (
        <AuthPage
          onLoginSuccess={handleLoginSuccess}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      )}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext) as AuthContextProps;

export default AuthProvider;
