import Container from "./Container";

import "../../styles/common/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <Container>

        <div className="footer-grid">

          <div>

            <h3>JANKI FINANCIAL SERVICES</h3>

            <p>
              Helping customers find the right financial
              solution through trusted banking partners.
            </p>

          </div>

          <div>

            <h4>Quick Links</h4>

            <ul>

              <li>Home</li>

              <li>Services</li>

              <li>About</li>

              <li>Contact</li>

            </ul>

          </div>

          <div>

            <h4>Legal</h4>

            <ul>

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          © 2026 Janki Financial Services. All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
};

export default Footer;