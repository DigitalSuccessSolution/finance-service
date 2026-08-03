import Hero from "../components/home/Hero";
import LoanCard from "../components/home/LoanCard";
import Timeline from "../components/home/Timeline";
import WhyChooseUs from "../components/home/WhyChooseUs";

import loanData from "../data/loanData";

import "../styles/home/services.css";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="services-preview">
        <div className="container">

          <div className="section-heading">

            <span>OUR SERVICES</span>

            <h2>Explore Our Loan Solutions</h2>

            <p>
              Flexible financial solutions designed for every stage
              of life and business.
            </p>

          </div>

          <div className="loan-grid">

            {loanData.map((loan) => (
              <LoanCard
                key={loan.title}
                {...loan}
              />
            ))}

          </div>

        </div>
      </section>

      <Timeline />

      <WhyChooseUs />

    </>
  );
};

export default Home;