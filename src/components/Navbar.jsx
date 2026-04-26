const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-red-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="./favicon.svg"
                alt="favicon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>

            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Modern</span>
              <span className="text-blue-400">React Ui</span>
            </span>
          </div>
        </div>

        {/* Links */}
      </div>
    </nav>
  );
};

export default Navbar;
