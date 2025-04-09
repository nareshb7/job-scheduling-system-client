import { ThemeType, User } from "authContext/types";
import Button from "common/button";
import ThemeButton from "components/themeButton";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";
import { AuthPageProps, CurrentPageType, WelcomePageProps } from "pages/types";
import { useState } from "react";

const AuthPage = ({ onLoginSuccess, toggleTheme, theme }: AuthPageProps) => {
  const [currentpage, setCurrentPage] = useState<CurrentPageType>("WELCOME");
  const handlePageChange = (page: CurrentPageType, data?: User) => {
    setCurrentPage(page);
    if (page === "" && data) {
      onLoginSuccess(data);
    }
  };

  const getActivePage = (type: CurrentPageType) => {
    switch (type) {
      case "LOGIN":
        return <LoginPage onPageChange={handlePageChange} />;
      case "SIGNUP":
        return <SignupPage onPageChange={handlePageChange} />;
      case "WELCOME":
        return (
          <WelcomePage
            onPageChange={handlePageChange}
            toggleTheme={toggleTheme}
            theme={theme}
          />
        );
      default:
        return null;
    }
  };

  return getActivePage(currentpage);
};

const WelcomePage = ({
  onPageChange,
  toggleTheme,
  theme,
}: WelcomePageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between px-8 py-4 bg-white text-gray-800 shadow dark:bg-gray-800 dark:text-white transition-colors duration-300">
        <h1 className="text-2xl font-bold">Job Scheduling System</h1>
        <div className="space-x-4 flex">
          <ThemeButton toggleTheme={toggleTheme} theme={theme} />
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={() => onPageChange("LOGIN")}
          >
            Login
          </Button>
          <Button
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            onClick={() => onPageChange("SIGNUP")}
          >
            Signup
          </Button>
        </div>
      </nav>

      {/* Content Section */}
      <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Welcome to the Job Scheduling System
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          This application helps you track and manage job applications
          efficiently — from applying to interviews, offers, and follow-ups.
          Stay organized and level up your job hunt!
        </p>
      </main>
    </div>
  );
};

export default AuthPage;
