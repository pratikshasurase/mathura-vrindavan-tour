const GalleryCard = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition duration-500 group-hover:opacity-100"></div>

      {/* Category Badge */}
      <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
        {item.category}
      </span>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-5 text-white">
        <h3 className="text-2xl font-bold transition duration-300 group-hover:text-orange-400">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-gray-200">
          Click to view image
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;