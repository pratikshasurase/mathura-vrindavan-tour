import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 py-24">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center text-white">
        <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
          Book Your Spiritual Journey
        </span>

        <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
          Experience the Divine Land of
          <br />
          Mathura & Vrindavan
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-orange-100">
          Explore sacred temples, peaceful ghats, beautiful architecture and
          unforgettable spiritual moments with your family. Reserve your tour
          today and create memories for a lifetime.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition duration-300 hover:scale-105 hover:bg-gray-100"
          >
            Contact Us
            <FaArrowRight />
          </Link>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-orange-600"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;