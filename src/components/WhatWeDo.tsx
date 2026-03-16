export const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="w-full py-20 md:py-32 bg-[#EFE3E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Om <span className="italic">VEXA</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              <span className="italic">VEXA</span> är en fastighetsinvesterare som fokuserar på{" "}
              <strong>industri-, lager- och handelsfastigheter</strong> i svenska{" "}
              <strong>tillväxtkommuner</strong>. Bolaget grundades <strong>2018</strong> och har sedan dess
              byggt upp en portfölj om cirka <strong>20&nbsp;000 kvm</strong> med ett fastighetsvärde
              på omkring <strong>300 Mkr</strong>.
            </p>
            <p>
              Vi investerar i fastigheter om cirka <strong>1&nbsp;000–6&nbsp;000 kvm</strong> i kommuner
              med minst <strong>20&nbsp;000 invånare</strong>, med fokus på objekt med{" "}
              <strong>starka hyresgäster</strong> och goda förutsättningar för{" "}
              <strong>långsiktigt ägande</strong>.
            </p>
            <p>
              <span className="italic">VEXA</span> arbetar nära <strong>entreprenörer</strong> och <strong>fastighetsägare</strong> och kan
              genomföra både <strong>sale-leaseback-affärer</strong> och{" "}
              <strong>traditionella fastighetsförvärv</strong>.
            </p>
            <div className="pt-8">
              <p className="text-xl font-semibold text-black mb-4">
                <strong>Vill ni veta mer?</strong>
              </p>
              <p className="text-lg">
                Kontakta oss på{" "}
                <a
                  className="text-black underline hover:text-gray-700 transition-colors font-medium"
                  href="mailto:info@vexa.se"
                >
                  <strong>info@vexa.se</strong>
                </a>{" "}
                eller{" "}
                <a 
                  href="#apply" 
                  className="text-black underline hover:text-gray-700 transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#apply');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  skicka in en förfrågan
                </a>
                . Vi återkommer vanligtvis inom <strong>24 timmar</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
