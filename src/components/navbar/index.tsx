import { useAuthContext } from "authContext/index";
import Button from "common/button";
import ThemeButton from "components/themeButton";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PROJECT_NAME } from "utils/constants";
import { FiMenu, FiX } from "react-icons/fi";

import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme, handleLogout } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDashboardClick = () => {
    navigate("/");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 shadow-md">
      <div className="flex justify-between items-center p-4">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={handleDashboardClick}
        >
          {PROJECT_NAME}
        </h1>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 dark:text-white"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavLinkLocal to="/application-form" label="Create Job Application" />
          <NavLinkLocal to="/profile" label="Profile" />
          <NavLinkLocal to="/resume-list" label="Resume" />
          <NavLinkLocal to="/interview-questions" label="Interview Questions" />

          <ThemeButton toggleTheme={toggleTheme} theme={theme} />
          <Button
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <MobileLink to="/application-form" label="Create Job Application" />
          <MobileLink to="/profile" label="Profile" />
          <MobileLink to="/resume-list" label="Resume" />
          <MobileLink to="/interview-questions" label="Interview Questions" />

          <ThemeButton toggleTheme={toggleTheme} theme={theme} />
          <Button
            className="w-full bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
};

const NavLinkLocal = ({ to, label }: { to: string; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      ` text-blue-600 dark:text-blue-400 hover:underline transition ${
        isActive ? "underline text-blue-200 dark:text-blue-500" : ""
      }`
    }
  >
    {label}
  </NavLink>
);

const MobileLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="block text-gray-900 dark:text-white hover:text-blue-500"
  >
    {label}
  </Link>
);

export default Navbar;
