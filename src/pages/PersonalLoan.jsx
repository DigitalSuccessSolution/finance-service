import { useState } from "react";
import HeroSection from "../components/personal-loan/HeroSection";
import LoanCategories from "../components/personal-loan/LoanCategories";
import HowItWorks from "../components/personal-loan/HowItWorks";
import WhyChooseJanki from "../components/personal-loan/WhyChooseJanki";
import TestimonialsSection from "../components/personal-loan/TestimonialsSection";
import EMICalculatorSection from "../components/personal-loan/EMICalculatorSection";
import CTABanner from "../components/personal-loan/CTABanner";
import FAQSection from "../components/personal-loan/FAQSection";
import EligibilityModal from "../components/personal-loan/EligibilityModal";

import "../styles/personal-loan.css";

const PersonalLoan = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userMobile, setUserMobile] = useState("");
  const [selectedLoan, setSelectedLoan] = useState("Personal Loan");

  const handleCheckEligibility = (mobileNum) => {
    setUserMobile(mobileNum);
    setModalOpen(true);
  };

  const handleOpenApply = (loanTitle = "Personal Loan") => {
    setSelectedLoan(loanTitle);
    setModalOpen(true);
  };

  return (
    <div className="personal-loan-page">
      <HeroSection onCheckEligibility={handleCheckEligibility} />
      <LoanCategories onOpenApply={handleOpenApply} />
      <HowItWorks onStartApplication={handleOpenApply} />
      <WhyChooseJanki />
      <TestimonialsSection />
      <EMICalculatorSection onApplyWithParams={handleOpenApply} />
      <CTABanner onOpenApply={handleOpenApply} />
      <FAQSection />

      <EligibilityModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMobile={userMobile}
        initialLoanType={selectedLoan}
      />
    </div>
  );
};

export default PersonalLoan;
