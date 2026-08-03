import { NavLink } from "react-router-dom";

import Container from "./Container";
import Button from "./Button";

import logo from "../../images/logo.jpeg";

import "../../styles/common/header.css";

const navigation = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "About",
    path: "#",
  },
  {
    title: "Contact",
    path: "#",
  },
];

const Header = () => {
  return (
    <header className="header">

      <Container>

        <div className="header-content">

          <NavLink
            to="/"
            className="brand"
          >

            <img
              src={logo}
              alt="Janki Financial Services"
            />

            <div className="brand-info">

              <h2>JANKI FINANCIAL SERVICES</h2>

              <span>One Solution For All Loan Needs</span>

            </div>

          </NavLink>

          <nav className="navigation">

            {navigation.map((item) => (

              <NavLink
                key={item.title}
                to={item.path}
              >
                {item.title}
              </NavLink>

            ))}

          </nav>

          <div className="header-actions">

            <Button variant="outline">
              Login
            </Button>

            <Button>
              Apply Now
            </Button>

          </div>

        </div>

      </Container>

    </header>
  );
};

export default Header;