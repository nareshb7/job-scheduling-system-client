export interface AuthProviderProps {
  children: React.JSX.Element;
}
export type ThemeType = "dark" | "light";

export interface AuthContextProps {
  isLoggedin: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  currentuser: User | null;
  toggleTheme: () => void;
  theme: ThemeType;
  handleLogout: () => void;
  fetchResumes: () => void;
  getApplications: () => void;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  location: string;
  mobile: string;
  email: string;
  role: string;
  userId: string;
}
