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
    question: "Exempelfråga 1",
    answer: "Exempelsvar 1",
    value: "item-1",
  },
  {
    question: "Exempelfråga 2",
    answer: "Exempelsvar 2",
    value: "item-2",
  },
  {
    question: "Exempelfråga 3",
    answer: "Bruh",
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
