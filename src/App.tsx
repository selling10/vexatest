import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { ApplicationForm } from "./components/ApplicationForm";
import { WhatWeDo } from "./components/WhatWeDo";
import { InvestmentCriteria } from "./components/InvestmentCriteria";
import { TransactionTypes } from "./components/TransactionTypes";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import PrivacyPolicy from "./components/IntegrityPolicy";
import CookieConsent from "react-cookie-consent";
import MetaPixel from "./MetaPixel";
import { Helmet } from "react-helmet";
import "./App.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Vexa | Köper handels-, industri- och lagerfastigheter i svenska tillväxtkommuner</title>
        <meta name="description" content="Vexa köper handels-, industri- och lagerfastigheter i svenska tillväxtkommuner. Vi erbjuder flexibla lösningar för företag som vill utvecklas vidare. Enkelt, tryggt och långsiktigt." />
        <meta name="keywords" content="köpa fastighet, industrifastighet, lagerfastighet, handelsfastighet, fastighetsköpare, Vexa, svenska tillväxtkommuner, fastighetsinvestering, köp fastighet Sverige" />
        <link rel="canonical" href="https://vexa.se/" />
      </Helmet>
      <Hero />
      <WhatWeDo />
      <TransactionTypes />
      <InvestmentCriteria />
      <Process />
      <Portfolio />
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
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Vexa" />
        <meta name="language" content="Swedish" />
        <meta name="geo.region" content="SE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vexa.se/" />
        <meta property="og:title" content="Vexa | Köper handels-, industri- och lagerfastigheter" />
        <meta property="og:description" content="Vexa köper handels-, industri- och lagerfastigheter i svenska tillväxtkommuner. Vi erbjuder flexibla lösningar för företag som vill utvecklas vidare." />
        <meta property="og:image" content="https://vexa.se/og-image.jpg" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="Vexa" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vexa.se/" />
        <meta property="twitter:title" content="Vexa | Köper handels-, industri- och lagerfastigheter" />
        <meta property="twitter:description" content="Vexa köper handels-, industri- och lagerfastigheter i svenska tillväxtkommuner. Vi erbjuder flexibla lösningar för företag som vill utvecklas vidare." />
        <meta property="twitter:image" content="https://vexa.se/twitter-image.jpg" />
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
