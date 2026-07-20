import {
  FaBus,
  FaHotel,
  FaUtensils,
  FaMapMarkedAlt,
  FaUserTie,
  FaRupeeSign,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaBus />,
    title: "Comfortable Journey",
    description:
      "Travel comfortably with well-planned transportation throughout the tour.",
  },
  {
    icon: <FaHotel />,
    title: "Premium Stay",
    description:
      "Stay in clean, comfortable hotels with quality amenities.",
  },
  {
    icon: <FaUtensils />,
    title: "Delicious Food",
    description:
      "Enjoy fresh and hygienic breakfast and dinner every day.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Best Sightseeing",
    description:
      "Visit Mathura, Vrindavan, Govardhan, Barsana, Gokul and Agra.",
  },
  {
    icon: <FaUserTie />,
    title: "Tour Guide",
    description:
      "Friendly and experienced guides to assist you throughout the journey.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Affordable Price",
    description:
      "Get the best travel experience at a budget-friendly package price.",
  },
];

const WhyChooseUs = () => {
  return (
    <section data-aos="zoom-in" className="bg-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Why Travel With Us?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We provide a memorable spiritual journey with comfort,
            safety and unforgettable experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl text-orange-500">
                {item.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;