import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section data-aos="zoom-in-up" className="relative overflow-hidden bg-orange-600 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
          Book Your Spiritual Journey
        </span>

        <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
          Ready to Experience the Divine Tour?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-orange-100">
          Join us on a memorable journey to Mathura, Vrindavan,
          Govardhan, Barsana, Gokul and Agra. Make unforgettable
          memories with your family and friends.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:scale-105 hover:bg-gray-100"
          >
            Book Now
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;