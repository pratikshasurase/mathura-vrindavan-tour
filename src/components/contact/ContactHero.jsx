import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero/prem-mandir.jpg";

const ContactHero = () => {
  return (
    <section
      className="relative flex h-[60vh] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="text-5xl font-extrabold md:text-6xl">
          Contact Us
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          We'd love to help you plan your Mathura & Vrindavan Tour.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Link to="/" className="hover:text-orange-400">
            Home
          </Link>

          <span>/</span>

          <span className="text-orange-400">
            Contact
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;