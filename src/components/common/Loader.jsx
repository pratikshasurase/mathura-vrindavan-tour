const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">

      {/* Spinner */}

      <div className="h-16 w-16 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>

      {/* Title */}

      <h2 className="mt-8 text-3xl font-bold text-orange-600">
        Mathura Vrindavan Tour
      </h2>

      <p className="mt-2 text-gray-500">
        Loading your spiritual journey...
      </p>

    </div>
  );
};

export default Loader;