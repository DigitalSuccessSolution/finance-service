import { useState } from "react";
import { IndianRupee, ArrowRight, Calculator } from "lucide-react";
import Container from "../common/Container";

const EMICalculatorSection = ({ onApplyWithParams }) => {
  const [amount, setAmount] = useState(1000000); // 10 Lakhs default
  const [rate, setRate] = useState(8.5); // 8.5% default
  const [tenureMonths, setTenureMonths] = useState(24); // 24 Months default

  // EMI formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = () => {
    const r = rate / 12 / 100;
    const n = tenureMonths;
    if (r === 0) return Math.round(amount / n);
    const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();
  const totalPayable = monthlyEMI * tenureMonths;
  const totalInterest = totalPayable - amount;
  const principalPercentage = Math.round((amount / totalPayable) * 100);
  const interestPercentage = 100 - principalPercentage;

  const formatINR = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="pl-emi-section" id="emi-calculator">
      <Container>
        <div className="emi-outer-card reveal-on-scroll">
          <div className="emi-left-card">
            <div className="emi-card-header">
              <div className="emi-icon-title">
                <Calculator size={22} className="emi-icon" />
                <span>Loan Amount</span>
              </div>
              <div className="emi-value-badge">{formatINR(amount)}</div>
            </div>

            {/* Amount Slider */}
            <div className="slider-box">
              <input
                type="range"
                min={50000}
                max={5000000}
                step={50000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="custom-range-slider"
              />
              <div className="slider-min-max">
                <span>₹50,000</span>
                <span>₹50,00,000</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="emi-card-header">
              <span>Interest Rate</span>
              <div className="emi-value-badge">{rate}% p.a.</div>
            </div>
            <div className="slider-box">
              <input
                type="range"
                min={8.0}
                max={18.0}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="custom-range-slider"
              />
              <div className="slider-min-max">
                <span>8% p.a.</span>
                <span>18% p.a.</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="emi-card-header">
              <span>Tenure</span>
              <div className="emi-value-badge">{tenureMonths} Months</div>
            </div>
            <div className="slider-box">
              <input
                type="range"
                min={6}
                max={84}
                step={6}
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="custom-range-slider"
              />
              <div className="slider-min-max">
                <span>6 Months</span>
                <span>84 Months</span>
              </div>
            </div>
          </div>

          <div className="emi-right-content">
            <h2>Plan better with our EMI Calculator</h2>
            <p>Calculate your EMI in seconds and plan your finances better.</p>

            <div className="emi-result-breakdown">
              <div className="result-row main-emi">
                <span>Monthly EMI</span>
                <span className="emi-amount-val">{formatINR(monthlyEMI)}</span>
              </div>

              <div className="breakdown-bar">
                <div
                  className="bar-principal"
                  style={{ width: `${principalPercentage}%` }}
                  title={`Principal: ${principalPercentage}%`}
                ></div>
                <div
                  className="bar-interest"
                  style={{ width: `${interestPercentage}%` }}
                  title={`Interest: ${interestPercentage}%`}
                ></div>
              </div>

              <div className="result-sub-grid">
                <div>
                  <span className="sub-label">Principal Amount</span>
                  <span className="sub-value">{formatINR(amount)}</span>
                </div>
                <div>
                  <span className="sub-label">Total Interest</span>
                  <span className="sub-value gold">{formatINR(totalInterest)}</span>
                </div>
                <div>
                  <span className="sub-label">Total Amount Payable</span>
                  <span className="sub-value bold">{formatINR(totalPayable)}</span>
                </div>
              </div>
            </div>

            <button
              className="calc-now-btn"
              onClick={() => {
                if (onApplyWithParams) {
                  onApplyWithParams({ amount, rate, tenureMonths, monthlyEMI });
                }
              }}
            >
              <span>Calculate Now</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EMICalculatorSection;
