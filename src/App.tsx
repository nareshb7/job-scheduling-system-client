import Navbar from "components/navbar";

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold">
            Welcome to the Job Scheduling System
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            This is your dashboard. We will update the data soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
