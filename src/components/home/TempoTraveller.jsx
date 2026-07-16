import tempoImage from "../../assets/images/vehicles/tempo-traveller.jpg";
import {
  FaBus,
  FaSnowflake,
  FaUsers,
  FaSuitcase,
  FaMapMarkedAlt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "23 Seater",
    description: "Comfortable seating for your entire group.",
  },
  {
    icon: <FaSnowflake />,
    title: "Air Conditioned",
    description: "Fully AC vehicle for a pleasant journey.",
  },
  {
    icon: <FaSuitcase />,
    title: "Luggage Space",
    description: "Enough space for everyone's luggage.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Experienced Driver",
    description: "Professional driver with local route knowledge.",
  },
];

const TempoTraveller = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Transportation
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            23 Seater Tempo Traveller
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Travel together comfortably throughout the tour with a spacious,
            air-conditioned Tempo Traveller included in your package.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={tempoImage}
              alt="23 Seater Tempo Traveller"
              className="h-full w-full object-cover transition duration-500 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <FaBus className="text-3xl text-orange-500" />
              <h3 className="text-3xl font-bold text-gray-900">
                Comfortable Group Travel
              </h3>
            </div>

            <p className="leading-8 text-gray-600">
              As mentioned in your tour package, sightseeing and transfers will
              be provided in a private 23 Seater Tempo Traveller. It's ideal
              for group travel, offering comfort, convenience, and enough
              luggage space throughout your journey.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-orange-100 bg-orange-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-3 text-3xl text-orange-500">
                    {feature.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-orange-500 p-6 text-white">
              <div className="flex items-start gap-3">
                <FaMapMarkedAlt className="mt-1 text-2xl" />

                <div>
                  <h4 className="text-xl font-semibold">
                    Tour Transportation Included
                  </h4>

                  <p className="mt-2 leading-7 text-orange-100">
                    Pickup from Mathura Railway Station, sightseeing as per the
                    itinerary, and drop back to Mathura Railway Station are
                    included in your package.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempoTraveller;