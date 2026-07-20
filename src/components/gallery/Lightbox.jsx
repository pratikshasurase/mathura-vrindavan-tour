import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white p-3 text-xl text-black transition hover:rotate-90"
      >
        <FaTimes />
      </button>

      {/* Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl"
      >
        <img
          src={image.image}
          alt={image.title}
          className="max-h-[90vh] w-full object-contain"
        />

        <div className="bg-white p-5 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {image.title}
          </h2>

          <p className="mt-2 text-gray-600">
            {image.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;