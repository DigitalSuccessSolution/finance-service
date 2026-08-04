import { Percent, ShieldAlert, Timer, Headset } from "lucide-react";
import Container from "../common/Container";

const features = [
  {
    icon: Percent,
    title: "Lowest Interest Rates",
    desc: "Get the best rates in the market tailored to your credit profile."
  },
  {
    icon: ShieldAlert,
    title: "No Hidden Charges",
    desc: "100% transparent process with zero secret processing fees."
  },
  {
    icon: Timer,
    title: "Quick Disbursal",
    desc: "Funds disbursed straight into your account in no time."
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    desc: "We're here to help you at every step with personal financial advisors."
  }
];

const WhyChooseJanki = () => {
  return (
    <section className="pl-why-choose-us" id="why-choose-us">
      <Container>
        <div className="section-header center reveal-on-scroll">
          <span className="section-pill-tag">WHY CHOOSE JANKI</span>
          <h2>Experience the Janki Advantage</h2>
          <p>We partner with top-tier Indian banks and NBFCs to bring you unmatched interest rates and seamless loans.</p>
        </div>

        <div className="why-grid">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className={`why-card reveal-on-scroll stagger-delay-${idx + 1}`}>
                <div className="why-icon-box">
                  <Icon size={24} className="why-icon" />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseJanki;
