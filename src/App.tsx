import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { RentCalculator } from "./components/RentCalculator";
import { ScrollToTop } from "./components/ScrollToTop";
import { ApplicationForm } from "./components/ApplicationForm";
import { HowWorks } from "./components/HowWorks";
import PrivacyPolicy from "./components/IntegrityPolicy";
import CookieConsent from "react-cookie-consent";
import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <HowWorks />
      <RentCalculator />
      <About />
      <FAQ />
      <ApplicationForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/application-form" element={<ApplicationForm />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <CookieConsent
        location="bottom"
        buttonText="Jag förstår!"
        cookieName="myCookieConsent"
        style={{
          background: "black",
          color: "#EFE3E3",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 20px",
          flexWrap: "wrap",
        }}
        buttonStyle={{
          background: "#EFE3E3",
          color: "#333333",
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "5px",
          margin: "10px auto",
        }}
        expires={150}
      >
        <span style={{ fontSize: "14px", marginRight: "10px", fontWeight: "bold", flex: "1 1 100%" }}>
          Denna webbplats använder cookies för att förbättra din upplevelse.
        </span>
        <a href="/privacy-policy" style={{ color: "#EFE3E3", textDecoration: "underline", flex: "1 1 100%", textAlign: "center" }}>
          Läs mer
        </a>
      </CookieConsent>
    </Router>
  );
}

export default App;
