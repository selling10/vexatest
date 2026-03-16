import gjuteriet2Image from "@/assets/gjuteriet2.jpg";

export const About = () => {
  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${gjuteriet2Image})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Om Vexa
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed">
            <p>
              Vexa är en fastighetsinvesterare som fokuserar på industri-,
              lager- och handelsfastigheter i svenska tillväxtkommuner. Vi
              grundades 2018 och har sedan dess byggt en portfölj på cirka 20
              000 kvm med ett fastighetsvärde på cirka 300 Mkr.
            </p>
            <p>
              Vår strategi bygger på långsiktigt ägande och stabila
              kassaflöden. Vi genomför både sale-leaseback-transaktioner där
              företag säljer sin fastighet och hyr tillbaka den, samt
              traditionella fastighetsförvärv av objekt med starka hyresgäster.
            </p>
            <p>
              Vi investerar i fastigheter med cirka 1 000–6 000 kvm i svenska
              kommuner med minst 20 000 invånare. Fokus ligger på objekt med
              starka hyresgäster och goda förutsättningar för långsiktig
              värdeutveckling.
            </p>
            <div className="pt-8">
              <p className="text-xl font-semibold text-white mb-4">
                Vill ni veta mer?
              </p>
              <p className="text-lg">
                Kontakta oss på{" "}
                <a
                  className="text-white underline hover:text-white/80 transition-colors font-medium"
                  href="mailto:info@vexa.se"
                >
                  info@vexa.se
                </a>{" "}
                eller{" "}
                <a href="#apply" className="text-white underline hover:text-white/80 transition-colors font-medium">
                  skicka in en förfrågan
                </a>
                . Vi återkommer vanligtvis inom 24 timmar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
