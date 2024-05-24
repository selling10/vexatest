import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#EFE3E3] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Om oss
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  Sedan vår start 2019 har vårt bolag specialiserat sig på leaseback-affärer, vilket ger företag möjligheten att frigöra kapital och fokusera på sin kärnverksamhet. Vi har snabbt byggt upp en stark portfölj värderad till 130 miljoner kronor, tack vare vårt engagemang för att skapa skräddarsydda finansiella lösningar för våra kunder.
                </p>
              </div>
              <Statistics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
