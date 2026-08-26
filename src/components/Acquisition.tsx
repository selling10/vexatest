import { hall, icarus } from "@/assets/images";
import { Cta } from "./Cta";
import { Frame } from "./Frame";
import { Reveal, RevealText, Rule } from "./Reveal";

const steps = [
  {
    index: "01",
    title: "Ett första möte",
    body: "Skicka några rader eller slå oss en signal. Vi kommer gärna förbi på en kopp kaffe, förutsättningslöst. Ingen presentation behövs, vi bygger hellre en personlig kontakt från början.",
  },
  {
    index: "02",
    title: "Tydliga besked",
    body: "Är fastigheten intressant, återkommer vi med de frågor vi behöver få svar på och ett indikativt bud. Ni pratar direkt med beslutsfattare, utan kommittéer, och får snabbt veta om vi kan gå vidare.",
  },
  {
    index: "03",
    title: "Affär och utbetalning",
    body: "När vi är överens går vi igenom fastigheten och förutsättningarna för affären. Normalt tar affären 2-4 veckor beroende på förutsättningarna.",
  },
];

const pairRatio = hall.width / hall.height;

const photos = [
  { image: icarus, delay: 0 },
  { image: hall, delay: 80 },
];

export const Acquisition = () => (
  <section id="forvarv" className="bg-rosa pt-12 md:pt-16">
    <div data-surface="dark" className="bg-ink text-rosa">
      <div className="page py-section">
        <Rule />

        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-3">
            <h2 className="text-meta uppercase opacity-50">Vanliga förvärv</h2>
          </Reveal>

          <div className="md:col-span-8 md:col-start-5">
            <p className="text-display-2 font-semibold">
              <RevealText text="Sälj fastigheten" className="block" />
              <RevealText
                text="och lämna över ägandet"
                delay={90}
                className="block"
              />
            </p>
            <Reveal delay={200}>
              <p className="mt-8 max-w-measure text-lead opacity-70">
                Ni säljer fastigheten och vi tar över som långsiktig ägare.
                Processen är enkel och ni har hela tiden direktkontakt med
                beslutsfattare.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid items-start gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
          <ol className="min-w-0 md:col-span-6">
            {steps.map((step, position) => (
              <li key={step.index}>
                <Rule delay={position * 60} />
                <div className="grid gap-4 py-10 md:grid-cols-6 md:gap-6 md:py-12">
                  <Reveal className="md:col-span-1">
                    <span className="text-meta opacity-40">{step.index}</span>
                  </Reveal>
                  <Reveal delay={70} className="md:col-span-5">
                    <h3 className="text-display-3 font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-measure text-body opacity-70">
                      {step.body}
                    </p>
                  </Reveal>
                </div>
              </li>
            ))}
            <li>
              <Rule delay={200} />
            </li>
          </ol>

          <div className="flex min-w-0 flex-col gap-8 md:col-span-5 md:col-start-8 md:gap-10">
            {photos.map((photo) => (
              <Frame
                key={photo.image.fallback}
                image={photo.image}
                ratio={pairRatio}
                sizes="(min-width: 768px) 48vw, 100vw"
                delay={photo.delay}
              />
            ))}

            <Reveal delay={160}>
              <Cta href="#kontakt" variant="primary" tone="dark">
                Få ett indikativt bud
              </Cta>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);
