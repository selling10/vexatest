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
    question: "Vilka är fördelarna med att sale-leaseback?",
    answer: "Fördelarna inkluderar frigörande av kapital, förbättrad balansräkning, och möjligheten att fortsätta använda fastigheten utan störningar i verksamheten.",
    value: "item-1",
  },
  {
    question: "Hur går köpprocessen till?",
    answer: "Processen börjar med en initial konsultation där vi diskuterar era behov och fastighetens detaljer. Efter en värdering och due diligence förhandlar vi fram ett avtal. När köpet är slutfört, skriver vi ett leasingavtal där ni fortsätter att använda fastigheten.",
    value: "item-2",
  },
  {
    question: "Kan leasingavtalet förlängas?",
    answer: "Ja, vi erbjuder möjligheten att förlänga leasingavtalet efter den initiala leasingperioden. Villkor för förlängning förhandlas i god tid före den ursprungliga periodens slut.",
    value: "item-3",
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
            href="#about"
            className="text-gray-600 underline"
          >
            Kontakta oss
          </a>
        </h3>
      </div>
    </section>
  );
};
