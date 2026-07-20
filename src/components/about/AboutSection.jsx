import aboutImage from "../../assets/images/about/about-tour.jpg";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "4 Nights & 5 Days Spiritual Tour",
  "Comfortable Train Journey",
  "Premium Hotel Accommodation",
  "Delicious Breakfast & Dinner",
  "AC Bus for Sightseeing",
  "Experienced Tour Guide",
];

const AboutSection = () => {
  return (
    <section data-aos="fade-right" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        
        {/* Left Image */}
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={aboutImage}
            alt="Mathura Vrindavan Tour"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Right Content */}
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            About Our Tour
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
            Experience the Divine Journey of
            <span className="text-orange-500">
              {" "}
              Mathura & Vrindavan
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us on a memorable pilgrimage to the sacred places
            associated with Lord Krishna. Visit Mathura,
            Vrindavan, Govardhan, Barsana, Gokul, Nandgaon and
            the magnificent Taj Mahal in Agra during a perfectly
            planned spiritual tour.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-xl text-orange-500" />

                <span className="text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-10 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
            Explore Tour
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;