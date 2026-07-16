import {
  FaCalendarAlt,
  FaHotel,
  FaUsers,
  FaBus,
  FaMoon,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { tourData } from "../../data/tourData";

const info = [
  {
    icon: <FaCalendarAlt />,
    title: "Travel Date",
    value: tourData.travelDate,
  },
  {
    icon: <FaMoon />,
    title: "Duration",
    value: tourData.duration,
  },
  {
    icon: <FaUsers />,
    title: "Travellers",
    value: `${tourData.travellers.adults} Adults + ${tourData.travellers.children} Children`,
  },
  {
    icon: <FaBus />,
    title: "Vehicle",
    value: tourData.vehicle,
  },
  {
    icon: <FaHotel />,
    title: "Hotel",
    value: tourData.hotel,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Route",
    value: "Mathura → Vrindavan → Agra",
  },
];

const QuickInfo = () => {
  return (
    <section className="bg-orange-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {info.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4 text-3xl text-orange-600">{item.icon}</div>

            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickInfo;