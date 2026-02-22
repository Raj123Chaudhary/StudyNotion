const GlobalModal = () => {
  return (
    <div className="flex w-full  h-[calc(100vh-3.6rem)] items-center  justify-center">
      <div className="w-[320px] rounded-xl p-6  bg-white shadow-lg">
        <h2 className="mb-4 text-center text-lg font-semibold text-gray-800">
          Are you sure you want to logout?
        </h2>

        <div className="flex gap-4">
          <button
            className="w-full rounded-lg bg-red-500 px-4 py-2 text-white font-medium 
                   hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>

          <button
            className="w-full rounded-lg border border-gray-300 px-4 py-2 
                   text-gray-700 font-medium hover:bg-gray-100 
                   transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default GlobalModal;
