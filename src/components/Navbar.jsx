const Navbar = () => {
  return (
    <nav className="transition-all w-full duration-300 bg-red-800/20 backdrop-blur-sm fixed top-0 z-50 ">
      <div className="h-14 sm:h-20 max-w-7xl mx-auto flex items-center">
        <div className="flex justify-around items-center">
          {/*Logo */}
          <div className="flex space-x-1 px-2">
            <div>
              <img
                src="./favicon.svg"
                alt="favicon"
                className="h-6 w-6 sm:h-10 sm:w-10"
              />
            </div>
            <span className="font-bold sm:text-2xl">
              <span>Modern</span>
              <span className="text-blue-400">ReactUi</span>
            </span>
          </div>

          {/*Links*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
