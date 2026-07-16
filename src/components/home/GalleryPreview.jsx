import { Link } from "react-router-dom";

import prem1 from "../../assets/images/gallery/prem-mandir-1.jpg";
import prem2 from "../../assets/images/gallery/prem-mandir-2.jpg";
import banke from "../../assets/images/gallery/banke-bihari.jpg";
import iskcon from "../../assets/images/gallery/iskcon.jpg";
import taj from "../../assets/images/gallery/taj-mahal.jpg";
import agra from "../../assets/images/gallery/agra-fort.jpg";

const images = [
  {
    image: prem1,
    title: "Prem Mandir",
  },
  {
    image: prem2,
    title: "Prem Mandir Night View",
  },
  {
    image: banke,
    title: "Banke Bihari Temple",
  },
  {
    image: iskcon,
    title: "ISKCON Temple",
  },
  {
    image: taj,
    title: "Taj Mahal",
  },
  {
    image: agra,
    title: "Agra Fort",
  },
];

const GalleryPreview = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Tour Moments
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Explore some of the beautiful destinations included in this
            spiritual journey.
          </p>

        </div>

        {/* Gallery */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((item) => (

            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition duration-300 group-hover:opacity-100"></div>

              <div className="absolute bottom-0 left-0 p-6">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-14 text-center">

          <Link
            to="/gallery"
            className="inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
          >
            View Full Gallery
          </Link>

        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;