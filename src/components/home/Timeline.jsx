import {
  FileText,
  BadgeCheck,
  CheckCircle2,
  Wallet,
} from "lucide-react";

import "../../styles/home/timeline.css";

const steps = [
  {
    icon: FileText,
    title: "Apply Online",
    description: "Complete a simple online application in just a few minutes.",
  },
  {
    icon: BadgeCheck,
    title: "Verification",
    description: "Our team verifies your details and required documents.",
  },
  {
    icon: CheckCircle2,
    title: "Approval",
    description: "Receive quick approval from our trusted banking partners.",
  },
  {
    icon: Wallet,
    title: "Disbursement",
    description: "Loan amount is transferred directly to your account.",
  },
];

const Timeline = () => {
  return (
    <section className="timeline-section">

      <div className="container">

        <div className="section-heading">

          <span>PROCESS</span>

          <h2>How It Works</h2>

          <p>
            A quick and transparent process designed to make your
            loan journey simple.
          </p>

        </div>

        <div className="timeline-grid">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="timeline-card"
              >

                <div className="timeline-icon">
                  <Icon size={30} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Timeline;