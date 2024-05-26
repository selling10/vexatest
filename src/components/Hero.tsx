import { Button } from "./ui/button";
import backgroundImage from "@/assets/background5.png"; 

export const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center space-y-6">
        <main className="text-5xl md:text-6xl font-bold text-white">
          <h1>Vi köper din fastighet till marknadsvärde</h1>
        </main>

        <p className="text-2xl text-white md:w-10/12 mx-auto">
          Frigör kapital och fokusera på din verksamhet. Enkelt, tryggt och långsiktigt.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-8">
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
