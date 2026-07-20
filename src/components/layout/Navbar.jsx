import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          to="/"
          className={`text-2xl font-extrabold transition ${
            isScrolled ? "text-orange-600" : "text-white"
          }`}
        >
          Mathura Vrindavan Tour
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-semibold transition ${
                  isActive
                    ? "text-orange-500"
                    : isScrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-3xl md:hidden ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t bg-white shadow-lg md:hidden">
          <nav className="flex flex-col px-6 py-6">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-medium ${
                    isActive
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-700 hover:bg-orange-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-xl bg-orange-500 py-3 text-center font-semibold text-white"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;