import {
  FaTrain,
  FaPlaceOfWorship,
  FaMountain,
  FaLandmark,
  FaHome,
} from "react-icons/fa";

const highlights = [
  {
    day: "Day 1",
    title: "Pune → Delhi",
    description:
      "Begin your spiritual journey with an overnight train journey from Pune to Delhi.",
    icon: <FaTrain />,
  },
  {
    day: "Day 2",
    title: "Mathura & Vrindavan",
    description:
      "Visit Shri Krishna Janmabhoomi, Dwarkadhish Temple, Vishram Ghat, Prem Mandir and Banke Bihari Temple.",
    icon: <FaPlaceOfWorship />,
  },
  {
    day: "Day 3",
    title: "Govardhan • Barsana • Nandgaon",
    description:
      "Explore Govardhan Parikrama, Radha Rani Temple, Nand Bhavan and nearby sacred places.",
    icon: <FaMountain />,
  },
  {
    day: "Day 4",
    title: "Agra",
    description:
      "Experience the beauty of the Taj Mahal and explore the historic Agra Fort.",
    icon: <FaLandmark />,
  },
  {
    day: "Day 5",
    title: "Return Journey",
    description:
      "Complete your memorable tour and begin your journey back home with divine memories.",
    icon: <FaHome />,
  },
];

const TourHighlights = () => {
  return (
    <section data-aos="fade-left" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Tour Highlights
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            5 Days Tour Itinerary
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A carefully planned itinerary covering the most important spiritual
            and historical destinations.
          </p>
        </div>

        <div className="space-y-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl md:flex-row md:items-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-3xl text-orange-500">
                {item.icon}
              </div>

              <div className="flex-1">
                <span className="font-semibold text-orange-500">
                  {item.day}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourHighlights;