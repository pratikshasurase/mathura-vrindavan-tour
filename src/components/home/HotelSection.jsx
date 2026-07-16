import hotelImage from "../../assets/images/hotels/hotel-madhavam.jpg";
import {
  FaHotel,
  FaUtensils,
  FaWifi,
  FaParking,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const facilities = [
  "Deluxe Rooms",
  "Free WiFi",
  "Restaurant",
  "Parking",
  "Family Friendly",
  "24×7 Front Desk",
];

const HotelSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Accommodation
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Hotel Madhavam, Mathura
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Comfortable stay for your family with breakfast & dinner included
            in the package.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <img
              src={hotelImage}
              alt="Hotel Madhavam"
              className="h-full w-full object-cover transition duration-500 hover:scale-110"
            />

          </div>

          {/* Content */}

          <div>

            <div className="mb-6 flex items-center gap-3">

              <FaHotel className="text-3xl text-orange-500" />

              <h3 className="text-3xl font-bold">
                Deluxe Hotel Stay
              </h3>

            </div>

            <p className="leading-8 text-gray-600">
              Enjoy a peaceful stay at Hotel Madhavam, located in Mathura.
              The package includes comfortable accommodation with daily
              breakfast and dinner, making your spiritual journey relaxing
              and memorable.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow">
                <FaUtensils className="text-orange-500" />
                Breakfast & Dinner
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow">
                <FaWifi className="text-orange-500" />
                Free WiFi
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow">
                <FaParking className="text-orange-500" />
                Parking
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow">
                <FaMapMarkerAlt className="text-orange-500" />
                Mathura
              </div>

            </div>

            <div className="mt-10">

              <h4 className="mb-5 flex items-center gap-2 text-xl font-semibold">

                <FaStar className="text-orange-500" />

                Hotel Facilities

              </h4>

              <div className="grid gap-3 sm:grid-cols-2">

                {facilities.map((item) => (

                  <div
                    key={item}
                    className="rounded-xl bg-white p-3 shadow"
                  >
                    ✅ {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HotelSection;