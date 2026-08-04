import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "../common/Container";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "IT Professional, Mumbai",
    avatar: "/images/customer_rahul.png",
    rating: 5,
    quote: "The process was so smooth and quick. Got my loan approved in just a few hours!"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Manager, Delhi",
    avatar: "/images/customer_priya.png",
    rating: 5,
    quote: "Very transparent process and great customer support."
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Business Owner, Bangalore",
    avatar: "/images/customer_amit.png",
    rating: 5,
    quote: "Best loan experience ever. Highly recommended!"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pl-testimonials-section" id="testimonials">
      <Container>
        <div className="testimonials-wrapper">
          {/* Left Navy Card */}
          <div className="testimonials-stat-card">
            <span className="stat-subtitle">Trusted by</span>
            <h2>Thousands of Happy Customers</h2>
            <div className="rating-score-box">
              <span className="big-score">4.8</span>
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="star-filled" />
                ))}
              </div>
            </div>
            <p className="reviews-count">from 2,500+ reviews</p>
          </div>

          {/* Right Cards Slider */}
          <div className="testimonials-slider-area">
            <div className="slider-header-actions">
              <div className="slider-nav-btns">
                <button onClick={handlePrev} className="slider-btn" aria-label="Previous review">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={handleNext} className="slider-btn" aria-label="Next review">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="testimonials-grid-view">
              {testimonials.map((t, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div key={t.id} className={`testimonial-card ${isActive ? "active-slide" : ""}`}>
                    <Quote size={28} className="quote-icon" />
                    <p className="testimonial-text">{t.quote}</p>
                    <div className="author-info">
                      <img src={t.avatar} alt={t.name} className="author-avatar" />
                      <div>
                        <h4>{t.name}</h4>
                        <div className="author-stars">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} size={14} className="star-filled-sm" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
