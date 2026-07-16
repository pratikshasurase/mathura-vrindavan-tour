import {
  FaTrain,
  FaLandmark,
  FaMapMarkedAlt,
  FaMountain,
  FaHome,
} from "react-icons/fa";

const itinerary = [
  {
    day: "Day 01",
    title: "Arrival at Mathura & Vrindavan",
    icon: <FaTrain />,
    places: [
      "Shri Krishna Janmabhoomi",
      "Dwarkadhish Temple",
      "Vishram Ghat",
      "Banke Bihari Temple",
      "ISKCON Temple",
      "Prem Mandir Light Show",
    ],
  },
  {
    day: "Day 02",
    title: "Agra Excursion",
    icon: <FaLandmark />,
    places: [
      "Taj Mahal",
      "Agra Fort",
      "Shopping in Agra Market",
    ],
  },
  {
    day: "Day 03",
    title: "Barsana & Nandgaon",
    icon: <FaMapMarkedAlt />,
    places: [
      "Radha Rani Temple",
      "Bhanugarh Hill",
      "Nand Bhawan",
    ],
  },
  {
    day: "Day 04",
    title: "Govardhan • Gokul • Mahavan",
    icon: <FaMountain />,
    places: [
      "Govardhan Hill",
      "Daan Ghati",
      "Mukharvind",
      "Radha Kund",
      "Shyam Kund",
      "Raman Reti",
      "Brahmand Ghat",
      "Chintaharan Mahadev",
    ],
  },
  {
    day: "Day 05",
    title: "Departure",
    icon: <FaHome />,
    places: [
      "Breakfast",
      "Hotel Check-out",
      "Drop at Mathura Railway Station",
    ],
  },
];

const Itinerary = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Tour Itinerary
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            5 Days Spiritual Journey
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Carefully planned day-wise schedule to cover the major
            attractions of Mathura, Vrindavan and Agra.
          </p>
        </div>

        <div className="mt-16 space-y-8">

          {itinerary.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm transition hover:shadow-xl"
            >

              <div className="flex flex-col gap-6 md:flex-row">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl text-white">
                  {item.icon}
                </div>

                <div className="flex-1">

                  <p className="font-semibold text-orange-600">
                    {item.day}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <ul className="mt-5 grid gap-3 md:grid-cols-2">

                    {item.places.map((place, i) => (

                      <li
                        key={i}
                        className="rounded-xl bg-white p-3 shadow"
                      >
                        ✅ {place}
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Itinerary;