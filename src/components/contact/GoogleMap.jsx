const GoogleMap = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Find Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Our Office Location
          </h2>

          <p className="mt-4 text-gray-600">
            Visit our office or contact us for your next spiritual journey.
          </p>

        </div>

        {/* Map */}

        <div className="overflow-hidden rounded-3xl shadow-2xl">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            className="border-0"
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default GoogleMap;