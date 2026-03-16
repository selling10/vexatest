import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Vilka typer av fastigheter investerar Vexa i?",
    answer: "Vi investerar i industri-, lager- och handelsfastigheter i svenska tillväxtkommuner. Typiskt söker vi objekt på cirka 1 000–6 000 kvm i kommuner med minst 20 000 invånare.",
    value: "item-1",
  },
  {
    question: "Vad är fördelarna med sale-leaseback?",
    answer: "Sale-leaseback innebär att ni säljer er fastighet till marknadsvärde och hyr tillbaka den. Fördelarna inkluderar frigörande av kapital, förbättrad balansräkning, och möjligheten att fortsätta satsa på er kärnverksamhet utan nya banklån.",
    value: "item-2",
  },
  {
    question: "Gör ni även traditionella fastighetsköp?",
    answer: "Ja, vi genomför både sale-leaseback-transaktioner och traditionella fastighetsförvärv. Vi söker objekt med starka hyresgäster och goda kassaflöden, oavsett om det är en sale-leaseback eller ett traditionellt köp.",
    value: "item-3",
  },
  {
    question: "Hur går köpprocessen till?",
    answer: "Processen börjar med en initial dialog där vi går igenom era behov och fastighetens förutsättningar. Därefter gör vi en värdering och granskning. När vi är överens skriver vi avtal och planerar tillträde. Vanligtvis tar hela processen från första kontakt till utbetalning ca 3-8 veckor.",
    value: "item-4",
  },
  {
    question: "Vad krävs för att fastigheten ska vara intressant?",
    answer: "Vi letar efter fastigheter med starka hyresgäster, god historik och stabila kassaflöden. Objektet ska ligga i en svensk tillväxtkommun med minst 20 000 invånare och vara på cirka 1 000–6 000 kvm.",
    value: "item-5",
  },
  {
    question: "Hur påverkar en sale-leaseback ekonomin i mitt företag?",
    answer: "När ni frigör kapitalet bundet i er fastighet kan ni investera dessa medel i verksamhetens tillväxt. Detta förbättrar likviditeten och ger er större ekonomisk flexibilitet. Genom att sälja fastigheten till dess fulla marknadsvärde, stärks bolagets balansräkning och nyckeltal.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-16 bg-[#EFE3E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black tracking-tight">
          Frågor och Svar
        </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4" // Added space between questions
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
              className="mb-4 border-b border-black" // Set border color to black
            >
              <AccordionTrigger className="text-left text-black">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600"> {/* Changed text color to gray */}
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h3 className="font-medium mt-4 text-black">
          Har du fortfarande frågor?{" "}
          <a
            rel="noreferrer noopener"
            href="#apply"
            className="text-gray-600 underline"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#apply');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Kontakta oss
          </a>
        </h3>
      </div>
    </section>
  );
};
