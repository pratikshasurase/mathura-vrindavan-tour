import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">

      {/* Top */}

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Company */}

        <div>
          <h2 className="text-3xl font-extrabold text-orange-500">
            Mathura Tour
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Experience the divine journey through Mathura,
            Vrindavan, Govardhan, Barsana, Gokul and Agra
            with our premium spiritual tour packages.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="mb-5 text-xl font-bold">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-400 transition hover:text-orange-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-5 text-xl font-bold">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-500" />
              <span className="text-gray-400">
                Pune, Maharashtra
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <span className="text-gray-400">
                +91 98765 43210
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <span className="text-gray-400">
                contact@mathuratours.com
              </span>
            </div>

          </div>
        </div>

        {/* Newsletter */}

        <div>
          <h3 className="mb-5 text-xl font-bold">
            Newsletter
          </h3>

          <p className="mb-5 text-gray-400">
            Subscribe to receive tour updates and offers.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-orange-500"
          />

          <button className="mt-4 w-full rounded-lg bg-orange-500 py-3 font-semibold transition hover:bg-orange-600">
            Subscribe
          </button>
        </div>

      </div>

      {/* Social */}

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Mathura Vrindavan Tour.
            All Rights Reserved.
          </p>

          <div className="flex gap-4">

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
            >
              <FaYoutube />
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;