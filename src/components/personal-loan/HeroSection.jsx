import { useState } from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Container from "../common/Container";

const HeroSection = ({ onCheckEligibility }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobileNumber || mobileNumber.length < 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    if (onCheckEligibility) {
      onCheckEligibility(mobileNumber);
    }
  };

  return (
    <section className="pl-hero">
      <Container>
        <div className="pl-hero-grid">
          {/* Left Hero Content */}
          <div className="pl-hero-content reveal-on-scroll">
            <h1 className="pl-hero-heading">
              One Solution.<br />
              <span className="gold-gradient-text">All Loans.</span>
            </h1>

            <p className="pl-hero-subheading">
              Fast, flexible and hassle-free loans designed for your every need. Get instant approval with minimum documentation.
            </p>

            <form onSubmit={handleSubmit} className="pl-eligibility-form">
              <div className="input-group">
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => {
                    setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10));
                    if (error) setError("");
                  }}
                  className={error ? "input-error" : ""}
                />
              </div>
              <button type="submit" className="check-eligibility-btn">
                <span>Check Eligibility</span>
                <ArrowRight size={18} />
              </button>
            </form>

            {error && <div className="form-error-msg">{error}</div>}

            <div className="pl-hero-check-badges">
              <div className="check-badge-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Minimal Documentation</span>
              </div>
              <div className="check-badge-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Quick Approval</span>
              </div>
              <div className="check-badge-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>100% Secure Process</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image & Visual Archway */}
          <div className="pl-hero-visual reveal-on-scroll stagger-delay-2">
            <div className="visual-card-wrapper">
              <div className="arch-frame">
                <img
                  src="/images/hero_arch_door.png"
                  alt="Financial Freedom - Janki Financial Services"
                  className="hero-arch-img"
                />
              </div>

              {/* Instant Approval Stat Badge */}
              <div className="floating-badge speed-stat-badge">
                <div className="stat-icon-wrapper">
                  <Zap size={20} className="zap-icon" />
                </div>
                <div>
                  <h4>10 Mins</h4>
                  <p>In-Principle Sanction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
