import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How do I pay for my cleaning service?",
    answer:
      "You can pay via credit card, debit card, or secure online payment.",
  },

  {
    question: "Are the cleaning teams trained and supervised?",
    answer:
      "We aim for a consistent cleaning team for your home, though occasional changes may occur due to illness, vacations, or staff rotations. Our dedicated team leader ensures familiarity with your home and trains others to meet your expectations for quality service.",
  },

  {
    question: "Will I always have the same cleaning team?",
    answer:
      "We try to send the same team, but sometimes adjustments are necessary.",
  },

  {
    question: "Can my animals be out while my house is being cleaned?",
    answer: "Yes, but for safety, it’s best to keep pets in a separate room.",
  },

  {
    question: "Is your cleaning service guaranteed?",
    answer: "Absolutely. If you’re unsatisfied, we’ll make it right.",
  },

  {
    question: "Do I tip the housecleaners?",
    answer: "Tips are not required but always appreciated!",
  },

  {
    question: "What are your rates for house cleaning services?",
    answer:
      "Rates depend on the size of your home and the type of service requested.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="faqs">
        <div className="faq-block">
          <h2 className="faq-title" style={{fontSize: "48px"}}>Frequently Asked Questions</h2>
          <br />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-question"
                >
                  <span style={{fontSize: "18px", color: "black"}}>{faq.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer" style={{fontSize: "18px", colour: "#141414BF"}}>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
