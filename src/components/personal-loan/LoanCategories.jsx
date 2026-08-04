import { useState } from "react";
import { Home, Car, User, Store, Landmark, ArrowRight, Check } from "lucide-react";
import Container from "../common/Container";

const categories = [
  {
    id: "home-loan",
    icon: Home,
    title: "Home Loan",
    desc: "Make your dream home a reality",
    interest: "Starting @ 8.40% p.a."
  },
  {
    id: "car-loan",
    icon: Car,
    title: "Car Loan",
    desc: "Drive your dream car today",
    interest: "Starting @ 8.75% p.a."
  },
  {
    id: "personal-loan",
    icon: User,
    title: "Personal Loan",
    desc: "Funds for your personal needs",
    interest: "Starting @ 10.50% p.a.",
    popular: true
  },
  {
    id: "business-loan",
    icon: Store,
    title: "Business Loan",
    desc: "Grow your business",
    interest: "Starting @ 11.25% p.a."
  },
  {
    id: "property-loan",
    icon: Landmark,
    title: "Loan Against Property",
    desc: "Unlock the value of your property",
    interest: "Starting @ 9.15% p.a."
  }
];

const LoanCategories = ({ onSelectCategory, onOpenApply }) => {
  const [activeCategory, setActiveCategory] = useState("personal-loan");

  return (
    <section className="pl-categories-section" id="loan-categories">
      <Container>
        <div className="section-header center">
          <span className="section-pill-tag">EXPLORE LOANS</span>
          <h2>Tailored Financial Solutions For Every Need</h2>
          <p>Select a loan category below to get instant quotes, interest rates, and customized offers.</p>
        </div>

        <div className="categories-grid">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                className={`category-card ${isActive ? "active" : ""} ${cat.popular ? "popular-card" : ""}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (onSelectCategory) onSelectCategory(cat);
                }}
              >
                {cat.popular && (
                  <span className="popular-badge">
                    <Check size={12} /> Popular Choice
                  </span>
                )}

                <div className="cat-icon-box">
                  <Icon size={26} className="cat-icon" />
                </div>

                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <div className="cat-rate">{cat.interest}</div>

                <button
                  className="cat-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenApply) onOpenApply(cat.title);
                  }}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default LoanCategories;
