import {
  FaHotel,
  FaBus,
  FaUtensils,
  FaParking,
  FaGasPump,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

const inclusions = [
  {
    icon: <FaBus />,
    title: "Pickup & Drop",
    description: "Pickup and drop service from Mathura Railway Station.",
  },
  {
    icon: <FaBus />,
    title: "23 Seater Tempo Traveller",
    description: "Private vehicle for sightseeing and transfers.",
  },
  {
    icon: <FaHotel />,
    title: "4 Nights Stay",
    description: "Comfortable stay at Hotel Madhavam, Mathura.",
  },
  {
    icon: <FaUtensils />,
    title: "Meal Plan",
    description: "4 Breakfasts and 4 Dinners included.",
  },
  {
    icon: <FaParking />,
    title: "Parking Charges",
    description: "All parking charges included.",
  },
  {
    icon: <FaGasPump />,
    title: "Fuel Charges",
    description: "Complete fuel cost included.",
  },
  {
    icon: <FaUserTie />,
    title: "Driver Allowance",
    description: "Experienced driver with all charges included.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Transfer Taxes",
    description: "Transfer taxes included in the package.",
  },
];

const PackageInclusions = () => {
  return (
    <section className="bg-orange-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Package Inclusions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything Included In Your Tour
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Enjoy a hassle-free spiritual journey with accommodation,
            transportation, meals and other essential services already included
            in your package.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {inclusions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-4xl text-orange-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageInclusions;