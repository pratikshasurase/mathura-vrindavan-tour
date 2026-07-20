import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "",
    travelDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Booking Request Submitted Successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      travelers: "",
      travelDate: "",
      message: "",
    });
  };

  return (
    <section data-aos="fade-up" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Booking Form
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Book Your Tour
          </h2>

          <p className="mt-4 text-gray-600">
            Fill out the form below and our team will contact you soon.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl"
        >
          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="rounded-xl border p-4 outline-none focus:border-orange-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl border p-4 outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="rounded-xl border p-4 outline-none focus:border-orange-500"
            />

            <input
              type="number"
              name="travelers"
              placeholder="Number of Travelers"
              value={formData.travelers}
              onChange={handleChange}
              required
              className="rounded-xl border p-4 outline-none focus:border-orange-500"
            />

            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              required
              className="rounded-xl border p-4 outline-none focus:border-orange-500"
            />

          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Write Your Message..."
            value={formData.message}
            onChange={handleChange}
            className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-orange-500"
          ></textarea>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-orange-500 py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
          >
            Submit Booking Request
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactForm;