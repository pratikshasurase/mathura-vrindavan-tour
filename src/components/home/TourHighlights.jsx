import {
  FaPlaceOfWorship,
  FaLandmark,
  FaMonument,
} from "react-icons/fa";

const highlights = [
  {
    title: "Shri Krishna Janmabhoomi",
    description:
      "Visit the sacred birthplace of Lord Krishna and experience its spiritual atmosphere.",
    icon: <FaPlaceOfWorship />,
  },
  {
    title: "Banke Bihari Temple",
    description:
      "One of the most famous temples in Vrindavan dedicated to Lord Krishna.",
    icon: <FaPlaceOfWorship />,
  },
  {
    title: "Prem Mandir",
    description:
      "Witness the magnificent evening light and fountain show at Prem Mandir.",
    icon: <FaLandmark />,
  },
  {
    title: "ISKCON Temple",
    description:
      "Enjoy peaceful surroundings, devotional chants and beautiful architecture.",
    icon: <FaPlaceOfWorship />,
  },
  {
    title: "Taj Mahal",
    description:
      "Explore one of the Seven Wonders of the World in Agra.",
    icon: <FaMonument />,
  },
  {
    title: "Agra Fort",
    description:
      "Visit the magnificent Mughal fort, a UNESCO World Heritage Site.",
    icon: <FaLandmark />,
  },
];

const TourHighlights = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Tour Highlights
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Places You'll Visit
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Explore the most famous spiritual and historical destinations
            included in your 5-day tour.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl text-orange-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourHighlights;