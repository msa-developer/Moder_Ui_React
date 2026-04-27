import { Menu, X } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="transition-all duration-300 w-full bg-red-900/50 backdrop-blur-sm px-4">
      <main className="h-14 sm:h-20 max-w-7xl flex items-center justify-between px-4 sm:px-10 lg:px-12 mx-auto">
        <section className="flex justify-between items-center">
          {/*Logo*/}
          <div className="group cursor-pointer flex items-center space-x-1">
            <img
              src="./favicon.svg"
              alt="favicon"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-bold sm:text-xl lg:text-2xl">
              <span className="text-white">Modern</span>
              <span className="text-blue-400">ReactUi</span>
            </span>
          </div>
        </section>
        {/*Links*/}
        <section className="hidden sm:flex space-x-2">
          <a href="#features" className="text-gray-300 hover:text-white">
            Features
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-white">
            Testimonials
          </a>
          <a href="#AboutUs" className="text-gray-300 hover:text-white">
            AboutUs
          </a>
        </section>
        {/*button*/}
        <button
          className="sm:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </main>

      {/*Show Menu */}
      {isOpen ? (
        <section className="slide-from-top duration-300 animate-both">
          <a href="#features" className="text-gray-300 hover:text-white block">
            Features
          </a>
          <a
            href="#testimonials"
            className="text-gray-300 hover:text-white block"
          >
            Testimonials
          </a>
          <a href="#AboutUs" className="text-gray-300 hover:text-white block">
            AboutUs
          </a>
        </section>
      ) : null}
    </nav>
  );
};

export default Navbar;
