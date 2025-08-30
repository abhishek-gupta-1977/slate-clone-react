import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/Logo.svg";
import { menuItems } from "../Constants";
import { Car, Menu, X } from "lucide-react"; // Import Menu & X for mobile toggle

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false); // state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowMenu(false);
      } else if (currentScrollY < lastScrollY) {
        setShowMenu(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className="fixed top-0 left-0 z-50 text-gray-400 bg-[#262626] flex items-center justify-between h-20 w-full px-6 md:px-20 lg:px-32">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={image} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex gap-6 transition-opacity duration-300 ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              className="hover:text-white transition-all delay-100"
              to={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <button className="hover:text-white transition-all delay-100">
          <Car size={30} />
        </button>
      </ul>

      {/* Reserve Button (Always Visible) */}
      <Link
        to="/reserve"
        className="font-mono font-bold text-black bg-red-500 
             px-4 py-2 text-sm 
             sm:px-5 sm:py-3 sm:text-base 
             md:px-6 md:py-3.5 md:text-lg 
             lg:px-7 lg:py-4 lg:text-xl 
             rounded-lg hover:text-white transition-all"
        >
          Reserve
      </Link>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white ml-3"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#262626] flex flex-col items-center py-6 gap-6 md:hidden shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              className="hover:text-white transition-all delay-100"
              to={item.href}
              onClick={() => setMobileOpen(false)} // close menu after click
            >
              {item.name}
            </Link>
          ))}

          <button className="hover:text-white transition-all delay-100">
            <Car size={30} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
