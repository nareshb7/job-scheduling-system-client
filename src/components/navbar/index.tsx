import { useAuthContext } from "authContext/index";
import Button from "common/button";
import ThemeButton from "components/themeButton";
import { Link, useNavigate } from "react-router-dom";
import { PROJECT_NAME } from "utils/constants";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme, handleLogout } = useAuthContext();
  const handleDashboardClick = () => {
    navigate("/");
  };
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 shadow-md flex-wrap">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={handleDashboardClick}
      >
        {PROJECT_NAME}
      </h1>
      <div className="flex items-center gap-4 mt-2">
        <ThemeButton toggleTheme={toggleTheme} theme={theme} />
        <Link to="/application-form">
          <Button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
            Create Job Application
          </Button>
        </Link>
        <Button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
          Profile
        </Button>
        <Link to="/resume-list">
          <Button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
            Resume
          </Button>
        </Link>
        <Button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
          Interview Questions
        </Button>
        <Button
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
