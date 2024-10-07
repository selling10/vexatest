import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import backgroundImage from "@/assets/gjuteriet.jpg";
import germanFlag from "@/assets/germany-flag.png";
import swedishFlag from "@/assets/sweden-flag.png";
import englishFlag from "@/assets/uk-flag.png"; // Replace with appropriate flag

export const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0); // Initial opacity is 0 (hidden)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrollOpacity(0); // Fade out when scrolled past 400px
      } else {
        setScrollOpacity(1); // Fade in when scrolled less than 400px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Floating flags with fade effect on scroll */}
      <div
        className="fixed top-24 right-4 flex space-x-4 z-50 transition-opacity duration-300"
        style={{ opacity: scrollOpacity }} // Control opacity based on scroll
      >
        <a href="https://vexaindustrihus.de">
          <img
            src={germanFlag}
            alt="Deutsch"
            className="w-10 h-6 cursor-pointer rounded shadow-md"
          />
        </a>
        <a href="https://vexaindustrihus.se">
          <img
            src={swedishFlag}
            alt="Svenska"
            className="w-10 h-6 cursor-pointer rounded shadow-md"
          />
        </a>
        <a href="https://vexaindustrihus.com">
          <img
            src={englishFlag}
            alt="English"
            className="w-10 h-6 cursor-pointer rounded shadow-md"
          />
        </a>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <main className="text-5xl md:text-6xl font-bold text-white">
          <h1>Frigör kapitalet i din fastighet!</h1>
        </main>

        <div className="text-2xl text-white md:w-10/12 mx-auto mt-4">
          <h2>Vi köper din fastighet till marknadsvärde.</h2>
        </div>
        <div className="text-2xl text-white md:w-10/12 mx-auto mt-2">
          <h3>Enkelt, tryggt och långsiktigt.</h3>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-8 mt-6">
          <a href="#how">
            <Button className="w-auto" variant="custom">
              Så funkar det
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
