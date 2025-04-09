import { ThemeType, User } from "authContext/types";

export type CurrentPageType = "WELCOME" | "LOGIN" | "SIGNUP" | "";

export interface WelcomePageProps {
  onPageChange: (page: CurrentPageType) => void;
  toggleTheme: () => void;
  theme: ThemeType;
}

export interface AuthPageProps {
  onLoginSuccess: (data: User) => void;
  toggleTheme: () => void;
  theme: ThemeType;
}
export interface SignupPageProps {
  onPageChange: (currentPage: CurrentPageType) => void;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  location: string;
  password: string;
  role: string;
}

export interface LoginPageProps {
  onPageChange: (currentPage: CurrentPageType, data?: User) => void;
}

export interface LoginData {
  email: string;
  password: string;
}
