import {
  FaReceipt,
  FaPlane,
  FaTrain,
  FaTicketAlt,
  FaShoppingBag,
  FaHiking,
  FaUtensils,
  FaTimesCircle,
} from "react-icons/fa";

const exclusions = [
  {
    icon: <FaReceipt />,
    title: "GST 5%",
    description: "5% GST is extra and not included in the package price.",
  },
  {
    icon: <FaPlane />,
    title: "Flight Tickets",
    description: "Flight fares are not included.",
  },
  {
    icon: <FaTrain />,
    title: "Train Tickets",
    description: "Train tickets are not included in the package.",
  },
  {
    icon: <FaTicketAlt />,
    title: "Entry Tickets",
    description: "Monument entry fees and camera charges are extra.",
  },
  {
    icon: <FaShoppingBag />,
    title: "Personal Expenses",
    description:
      "Laundry, shopping, telephone bills, tips and similar expenses are not included.",
  },
  {
    icon: <FaHiking />,
    title: "Adventure Activities",
    description:
      "Safari, rides, boating and adventure activities are chargeable.",
  },
  {
    icon: <FaUtensils />,
    title: "Extra Meals",
    description:
      "Meals other than the package meal plan are chargeable.",
  },
  {
    icon: <FaTimesCircle />,
    title: "Other Services",
    description:
      "Any service not mentioned under 'Package Inclusions' is excluded.",
  },
];

const PackageExclusions = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
            Package Exclusions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Not Included In The Package
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Please note the following services and expenses are not included in
            the package cost and will be payable separately if required.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exclusions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-4xl text-red-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageExclusions;