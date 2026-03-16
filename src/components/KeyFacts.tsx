export const KeyFacts = () => {
  const facts = [
    {
      number: "2018",
      label: "Grundat",
      description: "Sedan starten har vi byggt en stabil portfölj",
    },
    {
      number: "20 000",
      label: "kvm",
      description: "Totalt fastighetsbestånd",
    },
    {
      number: "300",
      label: "Mkr",
      description: "Fastighetsvärde",
    },
    {
      number: "Långsiktigt",
      label: "ägande",
      description: "Stabila kassaflöden och hållbar utveckling",
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-xl hover:border-black transition-all duration-300 group"
            >
              <div className="text-5xl md:text-6xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                {fact.number}
              </div>
              <div className="text-xl md:text-2xl font-semibold text-black mb-3 tracking-tight">
                {fact.label}
              </div>
              <div className="text-sm md:text-base text-gray-600 leading-relaxed">
                {fact.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
