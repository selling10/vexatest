import trioImage from "../assets/trio.png"; // Update this path as necessary

const steps = [
  {
    number: "1",
    title: "Vi köper din fastighet till marknadsvärde",
    description: "Frigör kapital genom att sälja din fastighet till dess fulla marknadsvärde.",
  },
  {
    number: "2",
    title: "Du hyr tillbaka fastigheten",
    description: "Du hyr tillbaka fastigheten av oss med en årlig hyra som motsvarar 10% av marknadsvärdet.",
  },
  {
    number: "3",
    title: "Långsiktigt avtal",
    description: "Vi erbjuder ett 10 årigt avtal vilket ger stabilitet och förutsägbarhet för ditt företag.",
  },
];

export const HowWorks = () => {
  return (
    <section id="how" className="w-full py-14 md:py-16 bg-[#EFE3E3] flex justify-center">
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
        <div className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0 md:mr-16 flex justify-center md:justify-start">
          <img src={trioImage} alt="Buildings" className="max-w-[300px] w-full h-auto" />
        </div>
        <div className="w-full md:w-2/3 px-4 md:px-0">
          <h2 className="text-center md:text-left text-2xl md:text-3xl font-bold mb-8">Så funkar det:</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-black rounded-full text-lg font-bold mr-4">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
