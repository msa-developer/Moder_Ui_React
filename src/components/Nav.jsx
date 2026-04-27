import { Menu, X } from "lucide-react";
import React from "react";

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="bg-red-900/20 p-4 w-full transition-all duration-300 backdrop-blur-sm z-50 fixed top-0">
      <div className="h-14 px-4 sm:px-8 mx-auto max-w-7xl ">
        <header className="flex items-center w-full justify-between">
          {/* Logo */}
          <section className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img src="./favicon.svg" alt="favicon" />
            </div>
            <span className="font-bold">
              <span className="text-white">Modern</span>
              <span className="text-blue-400">ReactUi</span>
            </span>
          </section>
          {/* Links */}
          <section className="hidden sm:flex space-x-2">
            <a href="#features" className="text-gray-300 hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white">
              Testimonials
            </a>
          </section>

          {/* Menu Button */}
          <button
            className="sm:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </header>
      </div>

      {/* LInks */}
      {open ? (
        <section className="sm:hidden space-x-2 duration-300 animate-in slide-from-top">
          <a href="#features" className="text-gray-300 hover:text-white block">
            Features
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white block">
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-gray-300 hover:text-white block"
          >
            Testimonials
          </a>
        </section>
      ) : null}
    </nav>
  );
};

export default Nav;
