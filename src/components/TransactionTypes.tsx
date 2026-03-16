import helsingborgImage from "@/assets/HBG.jpg";

export const TransactionTypes = () => {
  const transactionTypes = [
    {
      title: "När kapital behövs i verksamheten",
      description:
        "Vi köper er fastighet och erbjuder er att fortsätta använda den som hyresgäst. Kapital frigörs för investeringar i verksamheten, diversifiering eller en starkare balansräkning.",
    },
    {
      title: "Vid bolagsförsäljning",
      description:
        "Vid en bolagsförsäljning kan ni få mer betalt genom att sälja fastigheten separat från rörelsen. Verksamheten säljs till den köpare som värderar rörelsen högst, och vi kan köpa fastigheten till ett attraktivt pris.",
    },
    {
      title: "Generationsskifte",
      description:
        "Vid generationsskifte i familjeföretag kan fastigheten säljas för att förenkla ägarförändringen och frigöra kapital, samtidigt som verksamheten fortsätter använda lokalen.",
    },
    {
      title: "Vid en traditionell fastighetstransaktion",
      description:
        "Vi köper industri- och lagerfastigheter med etablerade hyresgäster och goda förutsättningar för långsiktigt ägande.",
    },
  ];

  return (
    <section 
      id="deal-types"
      className="relative w-full py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${helsingborgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  Typiska affärer
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                  Vi hjälper fastighetsägare och företagare i olika situationer. Här är
                  några exempel på när Vexa kan vara relevant.
                </p>
              </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {transactionTypes.map((type, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/50 hover:border-white group"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
                {type.title}
              </h3>
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
