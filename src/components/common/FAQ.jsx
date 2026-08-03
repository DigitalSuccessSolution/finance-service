import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import "../../styles/common/faq.css";

const faqData = [
  {
    question: "How long does loan approval take?",
    answer:
      "Loan approval generally takes between 24 to 72 hours depending on document verification and lender requirements."
  },
  {
    question: "Which documents are required?",
    answer:
      "Basic KYC documents, income proof, address proof and bank statements are commonly required."
  },
  {
    question: "Do you charge any consultation fees?",
    answer:
      "No. Initial consultation and eligibility checking are completely free."
  },
  {
    question: "Can I apply for multiple loan types?",
    answer:
      "Yes. Our advisors help you compare different loan options before applying."
  },
  {
    question: "Is my information secure?",
    answer:
      "Absolutely. Your information remains confidential and is shared only with authorized lending partners."
  }
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="faq-section">

      <div className="container">

        <div className="section-heading">

          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before applying for your loan.
          </p>

        </div>

        <div className="faq-list">

          {faqData.map((item, index) => (

            <div
              className="faq-item"
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >

                <span>{item.question}</span>

                {active === index ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}

              </button>

              {active === index && (

                <div className="faq-answer">

                  <p>{item.answer}</p>

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