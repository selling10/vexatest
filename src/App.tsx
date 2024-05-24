import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { RentCalculator } from "./components/RentCalculator";
import { ScrollToTop } from "./components/ScrollToTop";
import { ApplicationForm } from "./components/ApplicationForm";
import { HowWorks } from "./components/HowWorks";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowWorks />
      <RentCalculator />
      <About />
      <FAQ/>
       <ApplicationForm/>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
