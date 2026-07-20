import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    info: "Pune, Maharashtra, India",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    info: "+91 98765 43210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Address",
    info: "info@mathuravrindavantour.com",
  },
  {
    icon: <FaClock />,
    title: "Office Hours",
    info: "Mon - Sat | 9:00 AM - 7:00 PM",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl text-orange-500">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;