import {
  FaUsers,
  FaMapMarkedAlt,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "500+",
    title: "Happy Travelers",
  },
  {
    icon: <FaMapMarkedAlt />,
    number: "25+",
    title: "Places Covered",
  },
  {
    icon: <FaStar />,
    number: "4.9",
    title: "Customer Rating",
  },
  {
    icon: <FaCalendarAlt />,
    number: "10+",
    title: "Years Experience",
  },
];

const Statistics = () => {
  return (
    <section data-aos="flip-up" className="bg-orange-500 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl text-orange-500">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                {item.number}
              </h2>

              <p className="mt-3 text-lg text-gray-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;