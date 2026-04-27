import { Menu, X } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
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
              <span className="text-blue-400">ReactUi</span>
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              pricing
            </a>

            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              testimonials
            </a>
          </div>

          {/*Button*/}
          <button
            className="md:hidden items-center p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            {mobileMenu ? <X /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>
      {mobileMenu ? (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in duration-300 slide-from-top">
          <div className="space-y-2 px-2 py-2">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base block"
              onClick={() => setMobileMenu(false)}
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base block"
              onClick={() => setMobileMenu(false)}
            >
              pricing
            </a>

            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base block"
              onClick={() => setMobileMenu(false)}
            >
              testimonials
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
