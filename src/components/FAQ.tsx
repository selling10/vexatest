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
    question: "Vad är fördelarna med att sälja och hyra tillbaka företagets fastighet?",
    answer: "Fördelarna inkluderar frigörande av kapital, förbättrad balansräkning, och möjligheten att fortsätta satsa på er kärnverksamhet utan nya banklån.",
    value: "item-1",
  },
  {
    question: "Hur går köpprocessen till?",
    answer: "Processen börjar med att vi bokar in ett möte över en kaffe, där vi kommer ut till er och pratar igenom era behov och fastighetens förutsättningar. Därefter gör vi en värdering och finansiell kontroll av er som blivande hyresgäst. När vi är överens, skriver vi ett hyresavtal så att ni kan fortsätta använda fastigheten precis som vanligt. Vi ser till att hela processen går smidigt och enkelt, och finns med er hela vägen.",
    value: "item-2",
  },
  {
    question: "Kan hyresavtalet förlängas?",
    answer: "Ja, vi erbjuder möjligheten att förlänga hyresavtal efter den initiala hyresperioden. Villkor för förlängning förhandlas i god tid före den ursprungliga periodens slut.",
    value: "item-3",
  },
  {
    question: "Hur lång tid tar hela processen från start till slut?",
    answer: "Tidsramen kan variera beroende på fastighetens förutsättningar och era specifika behov, men vanligtvis tar hela processen från första mötet till utbetalda pengar ca 3-8 veckor.",
    value: "item-4",
  },
  {
    question: "Hur påverkar detta ekonomin i mitt företag?",
    answer: "När ni frigör kapitalet bundet i er fastighet kan ni investera dessa medel i verksamhetens tillväxt. Detta förbättrar likviditeten och ge er större ekonomisk flexibilitet. Genom att sälja fastigheten till dess fulla marknadsvärde, stärks bolagets balansräkning och nyckeltal.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-[#EFE3E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Frågor och Svar
        </h2>

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
          >
            Kontakta oss
          </a>
        </h3>
      </div>
    </section>
  );
};
