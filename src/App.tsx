import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import { Helmet } from "react-helmet";

import { About } from "./components/About";
import { Acquisition } from "./components/Acquisition";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SaleLeaseback } from "./components/SaleLeaseback";
import { ScrollToTop } from "./components/ScrollToTop";
import { Ways } from "./components/Ways";
import { Why } from "./components/Why";
import PrivacyPolicy from "./components/IntegrityPolicy";
import MetaPixel from "./MetaPixel";
import { useSmoothScroll } from "./lib/smoothScroll";

const title = "VEXA | Vi köper din fastighet – förvärv och sale & leaseback";
const description =
  "VEXA Industrihus köper handels-, industri- och bostadsfastigheter i hela Sverige. Vanliga förvärv och sale & leaseback. Enkelt, tryggt och långsiktigt, grundat 2018.";

function Home() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="köpa fastighet, sälja fastighet, förvärv, sale and leaseback, sale & leaseback, fastighetsköpare, VEXA, VEXA Industrihus, långsiktigt ägande"
        />
        <link rel="canonical" href="https://vexa.se/" />
        <meta property="og:url" content="https://vexa.se/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <main>
        <Hero />
        <Ways />
        <Acquisition />
        <SaleLeaseback />
        <Why />
        <About />
        <Contact />
      </main>
    </>
  );
}

function App() {
  useSmoothScroll();

  return (
    <Router>
      <MetaPixel />
      <ScrollToTop />

      <Helmet>
        <html lang="sv" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="VEXA Industrihus" />
        <meta name="theme-color" content="#efe3e3" />
        <meta name="color-scheme" content="light" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="VEXA" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:image" content="https://vexa.se/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="VEXA – vi köper din fastighet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://vexa.se/og-image.jpg" />
        <meta
          name="twitter:image:alt"
          content="VEXA – vi köper din fastighet"
        />
      </Helmet>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />

      <CookieConsent
        location="bottom"
        buttonText="Jag förstår"
        cookieName="vexaCookieConsent"
        expires={150}
        disableStyles
        containerClasses="fixed inset-x-0 bottom-0 z-50 flex flex-wrap items-center justify-between gap-4 border-t border-rosa/20 bg-ink px-gutter py-5 text-rosa"
        contentClasses="text-meta uppercase leading-relaxed opacity-70"
        buttonWrapperClasses="shrink-0"
        buttonClasses="border border-rosa/40 px-5 py-2 text-meta uppercase transition-colors duration-300 hover:border-rosa"
      >
        Vi använder cookies för att förstå hur webbplatsen används.
      </CookieConsent>
    </Router>
  );
}

export default App;
