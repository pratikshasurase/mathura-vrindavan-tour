import heroImage from "../../assets/images/hero/prem-mandir.jpg";
import { FaArrowRight, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { tourData } from "../../data/tourData";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          {/* Badge */}
          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold">
            Spiritual Tour 2026
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            {tourData.packageName}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl font-medium text-orange-300">
            {tourData.subtitle}
          </p>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Experience the divine journey through the sacred land of Lord
            Krishna. Visit Mathura, Vrindavan, Agra, Barsana, Nandgaon,
            Govardhan and Gokul with your family.
          </p>

          {/* Tour Information */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-orange-400" />
              <span>{tourData.travelDate}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-400" />
              <span>
                {tourData.travellers.adults} Adults +{" "}
                {tourData.travellers.children} Children
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-orange-600 px-7 py-4 font-semibold transition hover:bg-orange-700">
              {tourData.buttons.primary}
              <FaArrowRight />
            </button>

            <button className="rounded-lg border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-black">
              {tourData.buttons.secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;