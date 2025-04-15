const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen absolute bg-gray-500 w-full opacity-50">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
