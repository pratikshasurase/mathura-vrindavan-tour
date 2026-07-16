import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is the duration of the tour?",
    answer:
      "The tour duration is 4 Nights and 5 Days covering Mathura, Vrindavan, Agra, Barsana, Nandgaon, Govardhan and Gokul.",
  },
  {
    question: "Which hotel is included?",
    answer:
      "Hotel Madhavam, Mathura (Deluxe Category) or a similar hotel depending on availability.",
  },
  {
    question: "Are meals included?",
    answer:
      "Yes. The package includes 4 Breakfasts and 4 Dinners (MAP Plan).",
  },
  {
    question: "Which vehicle will be provided?",
    answer:
      "A private 23 Seater Tempo Traveller is included for sightseeing and transfers as per the itinerary.",
  },
  {
    question: "Are train or flight tickets included?",
    answer:
      "No. Train and flight tickets are not included in the package cost.",
  },
  {
    question: "What is the payment policy?",
    answer:
      "70% advance payment is required for booking. The remaining amount is payable on the first day of the tour.",
  },
  {
    question: "Is GST included?",
    answer:
      "No. GST (5%) is extra and will be charged separately.",
  },
  {
    question: "Can the itinerary change?",
    answer:
      "Yes. Sightseeing may change due to traffic, weather, road conditions or government restrictions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Everything you need to know before booking your spiritual journey.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-orange-100 shadow-sm"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between bg-orange-50 px-6 py-5 text-left"
              >

                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <FaChevronUp className="text-orange-500" />
                ) : (
                  <FaChevronDown className="text-orange-500" />
                )}

              </button>

              {openIndex === index && (

                <div className="bg-white px-6 py-5 text-gray-600 leading-8">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;