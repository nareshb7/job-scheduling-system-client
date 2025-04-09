import Navbar from "components/navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        {/* Navbar */}
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
