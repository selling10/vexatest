import { flowerteam, gnesta } from "@/assets/images";
import { Cta } from "./Cta";
import { Frame } from "./Frame";
import { Reveal, RevealText } from "./Reveal";

const ways = [
  {
    title: "Sälj fastigheten",
    body: "Vill ni sälja fastigheten och lämna över ägandet gör vi ett vanligt förvärv. Ett förutsättningslöst samtal räcker för att börja. Ni får tydliga besked, och en affär tar normalt 2-4 veckor beroende på förutsättningarna.",
    href: "#forvarv",
    link: "Läs mer om vanliga förvärv",
    image: flowerteam,
  },
  {
    title: "Sälj och hyr tillbaka",
    body: "Vill ni frigöra kapital men stanna kvar i fastigheten köper vi fastigheten och tecknar ett långsiktigt hyresavtal med er.",
    href: "#sale-leaseback",
    link: "Läs mer om sale & leaseback",
    image: gnesta,
  },
];

const pairRatio = flowerteam.width / flowerteam.height;

export const Ways = () => (
  <section id="sa-fungerar-det" className="bg-rosa">
    <div className="page pb-16 pt-12 md:pb-12 md:pt-16">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <Reveal className="min-w-0 md:col-span-2">
          <h2 className="text-meta uppercase opacity-50">Två sätt att sälja</h2>
        </Reveal>

        <div className="min-w-0 md:col-span-9 md:col-start-4">
          <p className="text-display-2 font-semibold">
            <RevealText text="En smidig fastighetsaffär" className="block" />
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

      <div className="mt-12 flex flex-col gap-10 md:mt-16 md:gap-16">
        {ways.map((way, index) => (
          <article
            key={way.title}
            className="flex flex-col gap-6 md:grid md:grid-cols-12 md:items-start md:gap-8"
          >
            <Frame
              image={way.image}
              ratio={pairRatio}
              sizes="(min-width: 768px) 50vw, 100vw"
              delay={index * 60}
              className="md:col-span-5"
            />

            <Reveal
              delay={index * 80}
              className="min-w-0 md:col-span-6 md:col-start-7"
            >
              <h3 className="text-display-3 font-semibold">{way.title}</h3>
              <p className="mt-4 max-w-measure text-body opacity-70">
                {way.body}
              </p>
              <Cta
                href={way.href}
                variant="text"
                tone="light"
                className="mt-6"
              >
                {way.link}
              </Cta>
            </Reveal>
          </article>
        ))}
      </div>
    </div>
  </section>
);
