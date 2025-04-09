import { useAuthContext } from "authContext/index";
import Button from "common/button";
import ThemeButton from "components/themeButton";

const Navbar = () => {
  const { theme, toggleTheme, handleLogout } = useAuthContext();
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 shadow-md flex-wrap">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <ThemeButton toggleTheme={toggleTheme} theme={theme} />
        <Button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
          Home
        </Button>
        <Button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
          Profile
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
