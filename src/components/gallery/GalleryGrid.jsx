import { useState } from "react";
import { galleryData } from "../../data/galleryData";
import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";

const categories = ["All", "Temple", "Monument", "Nature"];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section data-aos="fade-up" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Our Gallery
          </h2>

          <p className="mt-4 text-gray-600">
            Discover beautiful moments from our Mathura,
            Vrindavan & Agra Tour.
          </p>
        </div>

        {/* Filter Buttons */}

        <div className="mb-12 flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 font-semibold transition duration-300 ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Gallery Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {filteredImages.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={setSelectedImage}
            />
          ))}

        </div>

        {/* Lightbox */}

        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}

      </div>
    </section>
  );
};

export default GalleryGrid;