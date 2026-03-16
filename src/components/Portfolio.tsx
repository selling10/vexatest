import hbg2Image from "@/assets/HBG2.jpg";
import nifelhemImage from "@/assets/Nifelhem.jpeg";
import gnesta2Image from "@/assets/Gnesta2.JPG";

export const Portfolio = () => {
  const properties = [
    {
      name: "Nifelhem 6",
      location: "Köping",
      image: nifelhemImage,
    },
    {
      name: "Prästhopen 2:8",
      location: "Gnesta",
      image: gnesta2Image,
    },
    {
      name: "Marknaden 4",
      location: "Helsingborg",
      image: hbg2Image,
    },
  ];

  return (
    <section id="portfolio" className="w-full py-20 md:py-32 bg-[#EFE3E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Portfölj
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            <span className="italic font-bold">VEXA</span> förvaltar idag fastigheter
            med en total lokalarea om 20 000 kvm. Nedan är ett litet utdrag av de
            hus vi äger.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {properties.map((property, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                {property.image ? (
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 border-4 border-gray-400 rounded-lg mx-auto mb-4"></div>
                    <span className="text-gray-500 text-sm">Bild kommer snart</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-black bg-opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 pb-4 px-6 z-10 text-center">
                  <h3 className="text-lg font-bold text-white">
                    {property.location} {property.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Portföljen uppdateras löpande. Kontakta oss för mer information om
            våra fastigheter.
          </p>
        </div>
      </div>
    </section>
  );
};
