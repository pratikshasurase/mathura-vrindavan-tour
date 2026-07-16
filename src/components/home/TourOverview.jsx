import {
  FaRoute,
  FaCalendarAlt,
  FaUsers,
  FaBus,
  FaHotel,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { tourData } from "../../data/tourData";

const TourOverview = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Package Overview
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Discover the Divine Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Experience the spiritual beauty of Mathura, Vrindavan,
            Barsana, Govardhan, Gokul and Agra in one unforgettable
            pilgrimage. This tour is specially designed for families
            seeking devotion, peace and memorable experiences.
          </p>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaCalendarAlt className="mb-5 text-4xl text-orange-500" />
            <h3 className="text-xl font-semibold">
              Travel Date
            </h3>

            <p className="mt-3 text-gray-600">
              {tourData.travelDate}
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaRoute className="mb-5 text-4xl text-orange-500" />

            <h3 className="text-xl font-semibold">
              Tour Route
            </h3>

            <p className="mt-3 text-gray-600">
              {tourData.route.join(" → ")}
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaUsers className="mb-5 text-4xl text-orange-500" />

            <h3 className="text-xl font-semibold">
              Travellers
            </h3>

            <p className="mt-3 text-gray-600">
              {tourData.travellers.adults} Adults +{" "}
              {tourData.travellers.children} Children
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaHotel className="mb-5 text-4xl text-orange-500" />

            <h3 className="text-xl font-semibold">
              Hotel
            </h3>

            <p className="mt-3 text-gray-600">
              {tourData.hotel}
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaBus className="mb-5 text-4xl text-orange-500" />

            <h3 className="text-xl font-semibold">
              Vehicle
            </h3>

            <p className="mt-3 text-gray-600">
              {tourData.vehicle}
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <FaMapMarkerAlt className="mb-5 text-4xl text-orange-500" />

            <h3 className="text-xl font-semibold">
              Destination
            </h3>

            <p className="mt-3 text-gray-600">
              Mathura • Vrindavan • Agra
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TourOverview;