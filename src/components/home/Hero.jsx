import heroImage from "../../assets/images/hero/prem-mandir.jpg";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaUsers,
  FaBus,
  FaMoon,
} from "react-icons/fa";
import { tourData } from "../../data/tourData";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <span className="inline-block rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold shadow-lg">
            ✨ Spiritual Tour 2026
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            {tourData.packageName}
          </h1>

          <p className="mt-4 text-xl font-medium text-orange-300">
            {tourData.subtitle}
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-200">
            Discover the divine beauty of Mathura, Vrindavan, Govardhan,
            Barsana, Gokul and Agra with your family. Experience spirituality,
            heritage and unforgettable memories in one journey.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-4 font-semibold transition duration-300 hover:bg-orange-700">
              {tourData.buttons.primary}
              <FaArrowRight />
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-black">
              {tourData.buttons.secondary}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <div className="absolute bottom-8 left-1/2 z-20 w-[95%] max-w-6xl -translate-x-1/2">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg md:grid-cols-4">
          <div className="text-center text-white">
            <FaCalendarAlt className="mx-auto mb-2 text-2xl text-orange-400" />
            <p className="text-sm text-gray-300">Travel Date</p>
            <h4 className="mt-1 font-semibold">
              {tourData.travelDate}
            </h4>
          </div>

          <div className="text-center text-white">
            <FaMoon className="mx-auto mb-2 text-2xl text-orange-400" />
            <p className="text-sm text-gray-300">Duration</p>
            <h4 className="mt-1 font-semibold">
              {tourData.duration}
            </h4>
          </div>

          <div className="text-center text-white">
            <FaUsers className="mx-auto mb-2 text-2xl text-orange-400" />
            <p className="text-sm text-gray-300">Travellers</p>
            <h4 className="mt-1 font-semibold">
              {tourData.travellers.adults} Adults +{" "}
              {tourData.travellers.children} Children
            </h4>
          </div>

          <div className="text-center text-white">
            <FaBus className="mx-auto mb-2 text-2xl text-orange-400" />
            <p className="text-sm text-gray-300">Vehicle</p>
            <h4 className="mt-1 font-semibold">
              {tourData.vehicle}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;