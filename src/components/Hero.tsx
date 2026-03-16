import { Button } from "./ui/button";
import backgroundImage from "@/assets/gjuteriet.jpg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section
      id="top"
      className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <main className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          <h1>Vi köper din fastighet</h1>
        </main>

        <div className="text-lg md:text-xl lg:text-2xl text-white/95 md:w-11/12 mx-auto mt-4 leading-relaxed font-light">
          <h2>
            Handels-, industri- och lagerfastigheter i svenska tillväxtkommuner.
          </h2>
        </div>

        <div className="mt-12 flex justify-center items-center">
          <a
            href="#deal-types"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("#deal-types");
            }}
          >
            <Button className="w-auto px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300" variant="custom">
              Läs mer
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
