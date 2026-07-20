import { Link } from "react-router-dom";
import heroImage from "../../assets/images/gallery/prem-mandir.jpg";

const GalleryHero = () => {
  return (
    <section
      className="relative flex h-[60vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-extrabold md:text-6xl">
          Gallery
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Explore the beauty of Mathura, Vrindavan & Agra
        </p>

        {/* Breadcrumb */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm md:text-base">
          <Link
            to="/"
            className="hover:text-orange-400 transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-orange-400">
            Gallery
          </span>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;