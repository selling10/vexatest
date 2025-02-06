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
import MetaPixel from "./MetaPixel";
import { Helmet } from "react-helmet";
import "./App.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Sälj din Industrifastighet till Marknadsvärde | Vexa Industrihus</title>
        <meta name="description" content="Frigör kapital genom att sälja din industrifastighet till marknadsvärde och hyr tillbaka den med Vexa Industrihus. En trygg och långsiktig lösning för ditt företag." />
        <meta name="keywords" content="sälj industrifastighet, hyra tillbaka fastighet, marknadsvärde fastighet, Vexa Industrihus, frigör kapital, industriella fastigheter, fastighetslösningar" />
      </Helmet>
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
         <MetaPixel />
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vexaindustrihus.se/" />
        <meta property="og:title" content="Sälj din Industrifastighet till Marknadsvärde | Vexa Industrihus" />
        <meta property="og:description" content="Frigör kapital genom att sälja din industrifastighet till marknadsvärde och hyr tillbaka den med Vexa Industrihus. En trygg och långsiktig lösning för ditt företag." />
        <meta property="og:image" content="https://vexaindustrihus.se/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vexaindustrihus.se/" />
        <meta property="twitter:title" content="Sälj din Industrifastighet till Marknadsvärde | Vexa Industrihus" />
        <meta property="twitter:description" content="Frigör kapital genom att sälja din industrifastighet till marknadsvärde och hyr tillbaka den med Vexa Industrihus. En trygg och långsiktig lösning för ditt företag." />
        <meta property="twitter:image" content="https://vexaindustrihus.se/twitter-image.jpg" />
      </Helmet>
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
