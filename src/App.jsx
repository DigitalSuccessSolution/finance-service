import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import LoanDetails from "./pages/LoanDetails";
import Apply from "./pages/Apply";
import Dashboard from "./pages/Dashboard";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/loan-details" element={<LoanDetails />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;