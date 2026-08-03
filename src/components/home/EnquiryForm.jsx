import { useState } from "react";
import Button from "../common/Button";

import "../../styles/home/enquiry.css";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    loanType: "",
    loanAmount: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    alert("Thank you! Our executive will contact you shortly.");
  };

  return (
    <div className="enquiry-card">

      <h2>Quick Loan Enquiry</h2>

      <p>
        Fill in your details and our financial advisor will
        get back to you.
      </p>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-group">

          <label>Mobile Number</label>

          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-group">

          <label>Loan Type</label>

          <select
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            required
          >
            <option value="">Select Loan</option>
            <option>Home Loan</option>
            <option>Personal Loan</option>
            <option>Business Loan</option>
            <option>Car Loan</option>
            <option>Education Loan</option>
            <option>Loan Against Property</option>
          </select>

        </div>

        <div className="form-group">

          <label>Loan Amount</label>

          <input
            type="number"
            name="loanAmount"
            placeholder="Enter required amount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />

        </div>

        <Button type="submit">
          Submit Enquiry
        </Button>

      </form>

    </div>
  );
};

export default EnquiryForm;