import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-orange-600">
            🛕 Mathura Vrindavan Tour
          </h1>

          <p className="text-xs text-gray-500">
            Divine Journey • 4 Nights / 5 Days
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Book Now Button */}
        <button className="hidden rounded-lg bg-orange-600 px-5 py-2 text-white transition hover:bg-orange-700 md:block">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-orange-600 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-orange-100 bg-white md:hidden">
          <nav className="flex flex-col p-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 transition ${
                    isActive
                      ? "bg-orange-100 text-orange-600"
                      : "hover:bg-orange-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <button className="mt-4 rounded-lg bg-orange-600 py-3 text-white">
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;