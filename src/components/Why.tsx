import { Brand } from "./Brand";
import { Reveal, RevealText, Rule } from "./Reveal";

const points = [
  {
    title: "Långsiktigt ägande",
    body: "Vi köper för att äga länge och vara en stabil motpart över tid.",
  },
  {
    title: "Tydliga besked",
    body: "Ni pratar direkt med beslutsfattare. Inga kommittéer, inga onödigt långa processer.",
  },
  {
    title: "En kopp kaffe räcker",
    body: "Ingen presentation eller förberedelse behövs. Ett första samtal är helt förutsättningslöst.",
  },
];

export const Why = () => (
  <section
    id="varfor-vexa"
    data-surface="dark"
    className="bg-ink text-rosa"
  >
    <div className="page py-section">
      <Rule />

      <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-3">
          <h2 className="text-meta uppercase opacity-50">
            Varför <Brand />
          </h2>
        </Reveal>

        <div className="md:col-span-8 md:col-start-5">
          <p className="text-display-2 font-semibold">
            <RevealText text="Vi förstår verksamheten" className="block" />
            <RevealText text="bakom fastigheten" delay={90} className="block" />
          </p>
          <Reveal delay={200}>
            <p className="mt-8 max-w-measure text-lead opacity-70">
              Vi kommer själva från företagande och vet att en fastighetsaffär
              aldrig bara handlar om själva huset. Därför försöker vi hålla
              processen enkel, besluten snabba och relationerna långsiktiga.
            </p>
          </Reveal>
        </div>
      </div>

      <ul className="mt-16 grid gap-0 md:mt-24 md:grid-cols-3 md:gap-8">
        {points.map((point, position) => (
          <li key={point.title}>
            <Rule delay={position * 60} className="md:hidden" />
            <div className="hidden md:block">
              <Rule delay={position * 60} />
            </div>
            <Reveal delay={position * 80} className="py-10 md:py-12">
              <h3 className="text-display-3 font-semibold">{point.title}</h3>
              <p className="mt-4 max-w-measure-sm text-body opacity-70">
                {point.body}
              </p>
            </Reveal>
          </li>
        ))}
        <li className="md:hidden">
          <Rule delay={200} />
        </li>
      </ul>
    </div>
  </section>
);
