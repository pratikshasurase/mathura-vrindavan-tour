import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How many days is the tour?",
    answer:
      "The tour is 5 Days and 4 Nights covering Mathura, Vrindavan, Govardhan, Barsana, Gokul and Agra.",
  },
  {
    question: "Is hotel accommodation included?",
    answer:
      "Yes, comfortable hotel accommodation is included in the package.",
  },
  {
    question: "Are train tickets included?",
    answer:
      "Yes, train tickets are included as per the selected package.",
  },
  {
    question: "Is food included?",
    answer:
      "Yes, breakfast and dinner are included throughout the tour.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellation charges depend on the number of days before departure. Please contact us for complete details.",
  },
  {
    question: "How can I make payment?",
    answer:
      "You can pay using UPI, Bank Transfer, Debit/Credit Card or Cash.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-12 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Find answers to the most common questions about our tour packages.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <FaChevronUp className="text-orange-500" />
                ) : (
                  <FaChevronDown className="text-orange-500" />
                )}
              </button>

              {activeIndex === index && (
                <div className="border-t px-6 py-5 text-gray-600">
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

export default FAQ;