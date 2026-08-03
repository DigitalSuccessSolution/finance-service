import { ArrowRight } from "lucide-react";
import Button from "../common/Button";

const LoanCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="loan-card">

      <div className="loan-icon">
        <Icon size={32} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <Button variant="outline">
        Learn More
        <ArrowRight size={16} />
      </Button>

    </div>
  );
};

export default LoanCard;