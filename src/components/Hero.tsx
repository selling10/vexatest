import { Button } from "./ui/button";
import backgroundImage from "@/assets/gjuteriet.jpg";

export const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <main className="text-5xl md:text-6xl font-bold text-white">
          <h1>Vi köper din fastighet till marknadsvärde</h1>
        </main>

        <div className="text-2xl text-white md:w-10/12 mx-auto mt-4">
          <h2>Frigör kapitalet i din industrifastighet, och fokusera på din verksamhet.</h2>
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
