import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";

const CTABanner = ({ onOpenApply }) => {
  return (
    <section className="pl-cta-banner-section">
      <Container>
        <div className="cta-banner-card reveal-on-scroll">
          <div className="cta-banner-content">
            <h2>Ready to take the next step?</h2>
            <p>
              Check your eligibility now and get a loan that suits your needs. Paperless digital process with instant disbursal.
            </p>

            <div className="cta-btn-wrapper">
              <button className="cta-gold-btn" onClick={() => onOpenApply && onOpenApply()}>
                <span>Check Eligibility</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="cta-mini-features">
              <span><ShieldCheck size={16} /> 100% Data Confidential</span>
              <span><CheckCircle2 size={16} /> Instant Sanction Letter</span>
            </div>
          </div>

          <div className="cta-banner-mockup">
            <div className="mockup-img-frame">
              <img
                src="/images/phone-mockup.png"
                alt="Janki Financial Mobile App Preview"
                className="phone-mockup-img"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTABanner;
