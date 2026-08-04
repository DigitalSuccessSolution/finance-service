import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
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
          <div className="pl-hero-content">
            <div className="pl-hero-badge">
              <Sparkles size={16} className="badge-sparkle" />
              <span>Instant Personal Loans • Zero Hidden Fees</span>
            </div>

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
          <div className="pl-hero-visual">
            <div className="visual-card-wrapper">
              <div className="arch-frame">
                <img
                  src="/images/hero_arch_door.png"
                  alt="Financial Freedom - Janki Financial Services"
                  className="hero-arch-img"
                />
              </div>

              {/* Floating Glassmorphism Badge */}
              <div className="floating-badge freedom-badge">
                <div className="badge-logo-icon custom-gold-emblem">
                  <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="19" fill="url(#heroGoldGrad)" stroke="#E2B755" strokeWidth="1.5" />
                    <path d="M12 26V20C12 17.7909 13.7909 16 16 16H20" stroke="#0D2447" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M22 14H28M22 20H26" stroke="#0D2447" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M12 28L18 22L22 25L28 17" stroke="#0D2447" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 17H28V21" stroke="#0D2447" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="heroGoldGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F5D075"/>
                        <stop offset="0.5" stopColor="#C89B3C"/>
                        <stop offset="1" stopColor="#9B701D"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="badge-text-content">
                  <span className="badge-tagline">FINANCIAL FREEDOM</span>
                  <span className="badge-sub">STARTS HERE</span>
                </div>
              </div>

              {/* Instant Approval Floating Stat Badge */}
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
