import { FileText, ShieldCheck, Banknote } from "lucide-react";
import Container from "../common/Container";

const steps = [
  {
    stepNumber: "01",
    icon: FileText,
    title: "Apply Online",
    desc: "Fill in your basic details"
  },
  {
    stepNumber: "02",
    icon: ShieldCheck,
    title: "Get Approved",
    desc: "Instant verification & approval"
  },
  {
    stepNumber: "03",
    icon: Banknote,
    title: "Receive Funds",
    desc: "Amount credited to your account"
  }
];

const HowItWorks = () => {
  return (
    <section className="pl-how-it-works" id="how-it-works">
      <Container>
        <div className="section-header center">
          <span className="section-pill-tag">HOW IT WORKS</span>
          <h2>Simple steps. Quick approval.</h2>
          <p>Get your personal loan sanctioned with zero physical paperwork and transparent digital steps.</p>
        </div>

        <div className="steps-wrapper">
          <div className="steps-container">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.stepNumber} className="step-card-wrapper">
                  <div className="step-card">
                    <div className="step-number-badge">{step.stepNumber}</div>
                    <div className="step-icon-wrapper">
                      <Icon size={26} className="step-icon" />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="step-connector-dots" aria-hidden="true">
                      • • •
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;

