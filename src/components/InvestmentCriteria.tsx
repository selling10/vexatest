import sweImage from "@/assets/SWE.png";
import fastighetImage from "@/assets/Fastighet.png";
import hgImage from "@/assets/HG.png";

export const InvestmentCriteria = () => {
  const criteria = [
    {
      title: "Fastighet",
      items: [
        "Industri-, lager-, och handelsfastigheter",
        "Ca 1 000 – 6 000 kvm",
        "Flexibel användning",
      ],
      image: fastighetImage,
    },
    {
      title: "Hyresgäster",
      items: [
        "Etablerade verksamheter",
        "Dokumenterad historik",
        "Starka bolag och <strong>DUKTIGA</strong> entreprenörer",
      ],
      image: hgImage,
    },
    {
      title: "Geografi",
      items: [
        "Svenska tillväxtkommuner",
        "Kommuner med minst <strong>20 000 invånare</strong>",
      ],
      image: sweImage,
    },
  ];

  return (
    <section id="criteria" className="w-full py-20 md:py-32 bg-[#EFE3E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Vad vi letar efter
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Våra investeringskriterier hjälper oss att hitta fastigheter som passar
            vår strategi för långsiktigt ägande och stabila kassaflöden.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className="bg-[#EFE3E3] pt-2 pb-6 px-8 rounded-xl transition-all duration-300 hover:shadow-lg group text-center"
            >
              {criterion.image && (
                <div className="mb-4 -mt-6 flex justify-center items-end overflow-hidden rounded-lg min-h-[200px] md:min-h-[224px]">
                  <img 
                    src={criterion.image} 
                    alt={criterion.title} 
                    className={`object-contain group-hover:scale-110 transition-transform duration-300 ${
                      criterion.title === "Geografi" 
                        ? "h-48 md:h-56" 
                        : "h-36 md:h-44"
                    }`}
                  />
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-black mb-5">
                {criterion.title}
              </h3>
              <ul className="space-y-3 inline-block text-left">
                {criterion.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 flex items-start">
                    <span className="text-black mr-2 font-bold flex-shrink-0">•</span>
                    <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
