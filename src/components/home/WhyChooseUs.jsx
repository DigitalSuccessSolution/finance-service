import {
  Clock3,
  ShieldCheck,
  Landmark,
  Users,
} from "lucide-react";

import "../../styles/home/whyChooseUs.css";

const features = [
  {
    icon: Clock3,
    title: "Fast Processing",
    text: "Quick document verification and faster approvals.",
  },
  {
    icon: Users,
    title: "Trusted Advisors",
    text: "Experienced financial experts to guide you.",
  },
  {
    icon: Landmark,
    title: "Multiple Bank Partners",
    text: "Access loan offers from leading financial institutions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Process",
    text: "Safe and confidential handling of customer information.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="choose-section">

      <div className="container">

        <div className="section-heading">

          <span>WHY US</span>

          <h2>Why Choose Janki Financial Services</h2>

          <p>
            We believe getting a loan should be easy, transparent,
            and stress free.
          </p>

        </div>

        <div className="choose-grid">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="choose-card"
                key={item.title}
              >

                <Icon size={34} />

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;