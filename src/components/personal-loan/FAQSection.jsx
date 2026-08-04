import { useState } from "react";
import { Plus, Minus, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Container from "../common/Container";

const faqList = [
  {
    question: "What is the maximum loan amount I can apply for?",
    answer: "You can apply for personal loans ranging from ₹50,000 up to ₹50 Lakhs, depending on your monthly income, employer profile, and credit score."
  },
  {
    question: "What documents are required?",
    answer: "Only minimum digital documentation is needed: PAN Card, Aadhaar Card for KYC verification, last 3 months salary slips or bank statements, and current address proof."
  },
  {
    question: "How long does it take to get the loan?",
    answer: "With our 100% digital verification system, in-principle approval takes less than 10 minutes, and funds are credited to your bank account within 2 to 24 hours!"
  },
  {
    question: "Can I prepay my loan?",
    answer: "Yes, you can prepay or part-pay your personal loan after completing 1 to 6 EMIs as per lender terms. Prepayment helps reduce your overall interest burden."
  },
  {
    question: "Is there any foreclosure charge?",
    answer: "Foreclosure charges vary between 0% to 3% depending on the specific bank partner and loan tenure completed. We provide complete disclosure with zero hidden fees."
  },
  {
    question: "What is the minimum salary eligibility for a personal loan?",
    answer: "Salaried individuals with a minimum monthly net income of ₹15,000 are eligible to apply. Self-employed individuals need a minimum annual turnover of ₹2 Lakhs."
  },
  {
    question: "Will checking my eligibility impact my CIBIL score?",
    answer: "No! Pre-eligibility checking on Janki Financial Services is a soft inquiry and has ZERO impact on your CIBIL credit score."
  }
];

const FAQSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (idx) => {
    setActiveIdx(activeIdx === idx ? -1 : idx);
  };

  const displayedFaqs = showAll ? faqList : faqList.slice(0, 5);

  return (
    <section className="pl-faq-section" id="faq">
      <Container>
        <div className="section-header center">
          <span className="section-pill-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
          <p>Got questions about loan eligibility, documentation, or disbursal? We've got answers.</p>
        </div>

        <div className="faq-accordion-wrapper">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div key={idx} className={`faq-accordion-item ${isOpen ? "open" : ""}`}>
                <button className="faq-question-btn" onClick={() => toggle(idx)}>
                  <span>{faq.question}</span>
                  <div className="faq-toggle-icon">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="view-more-container">
          <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
            <span>{showAll ? "Show Less" : "View More"}</span>
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
