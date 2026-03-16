import gnestaImage from "@/assets/Gnesta.jpg";

const steps = [
  {
    number: "1",
    title: "Kontakt",
    description: "Initial dialog",
  },
  {
    number: "2",
    title: "Möte och visning",
    description: "För att förstå förutsättningarna",
  },
  {
    number: "3",
    title: "Indikativt bud",
    description: "Bud med förslag på hyresavtal",
  },
  {
    number: "4",
    title: "Granskning",
    description: "Due diligence av fastighet & hyresgäst",
  },
  {
    number: "5",
    title: "Avtal och tillträde",
    description: "Signering, tillträde och utbetalning",
  },
];

export const Process = () => {
  return (
    <section 
      id="process" 
      className="relative w-full py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${gnestaImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Vår process
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-5xl mx-auto leading-relaxed">
            Genom en strukturerad och beprövad process kan vi genomföra fastighetstransaktioner snabbt och effektivt, ofta inom 14 dagar från budaccept till utbetalning.
          </p>
        </div>
        
        {/* Process flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-start justify-between gap-8 md:gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Step circle */}
              <div className="flex flex-col items-center z-10 w-full">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center backdrop-blur-sm bg-white/10 rounded-full border-2 border-white text-white text-2xl md:text-3xl font-bold mb-4 shadow-lg relative">
                  <span className="relative z-10">{step.number}</span>
                </div>
                <div className="text-center max-w-[180px]">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
