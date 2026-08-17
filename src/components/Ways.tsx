import { flowerteam, gnesta } from "@/assets/images";
import { Frame } from "./Frame";
import { Reveal, RevealText } from "./Reveal";

const ways = [
  {
    title: "Sälj fastigheten",
    body: "Vill ni sälja fastigheten och lämna över ägandet gör vi ett vanligt förvärv. Ett förutsättningslöst samtal räcker för att börja. Ni får tydliga besked, och en affär tar normalt 14-30 dagar beroende på förutsättningarna.",
    href: "#forvarv",
    link: "Läs mer om vanliga förvärv",
    image: flowerteam,
  },
  {
    title: "Sälj och hyr tillbaka",
    body: "Vill ni frigöra kapital men stanna kvar i fastigheten kan vi köpa den och hyra tillbaka den till er, med ett långsiktigt hyresavtal.",
    href: "#sale-leaseback",
    link: "Läs mer om sale & leaseback",
    image: gnesta,
  },
];

const pairRatio = flowerteam.width / flowerteam.height;

export const Ways = () => (
  <section id="sa-fungerar-det" className="bg-rosa">
    <div className="page pb-10 pt-12 md:pb-12 md:pt-16">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <Reveal className="min-w-0 md:col-span-2">
          <h2 className="text-meta uppercase opacity-50">Två sätt att sälja</h2>
        </Reveal>

        <div className="min-w-0 md:col-span-9 md:col-start-4">
          <p className="text-display-2 font-semibold">
            <RevealText text="En fastighetsaffär" className="block" />
            <RevealText
              text="ska inte vara komplicerad"
              delay={90}
              className="block"
            />
          </p>
          <Reveal delay={200}>
            <p className="mt-8 max-w-measure text-lead">
              Ni kan sälja fastigheten och lämna över den helt, eller sälja och
              hyra tillbaka. Vi håller processen enkel och tydlig från första
              samtal till genomförd affär.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16">
        {ways.map((way, index) => (
          <div
            key={way.title}
            className="grid items-start gap-6 md:grid-cols-12 md:gap-8"
          >
            <Frame
              image={way.image}
              ratio={pairRatio}
              sizes="(min-width: 768px) 50vw, 100vw"
              delay={index * 60}
              className="order-2 md:order-1 md:col-span-5"
            />

            <Reveal
              delay={index * 80}
              className="order-1 min-w-0 md:order-2 md:col-span-6 md:col-start-7"
            >
              <h3 className="text-display-3 font-semibold">{way.title}</h3>
              <p className="mt-4 max-w-measure text-body opacity-70">
                {way.body}
              </p>
              <a
                href={way.href}
                className="mt-6 inline-flex text-meta uppercase opacity-50 transition-opacity duration-300 hover:opacity-100"
              >
                {way.link}
              </a>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);
