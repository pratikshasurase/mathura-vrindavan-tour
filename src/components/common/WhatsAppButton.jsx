import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Demo Number

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello! I would like to know more about the Mathura Vrindavan Tour.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;