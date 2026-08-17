import { maskinisten, nifelhem } from "@/assets/images";
import { Frame } from "./Frame";
import { Reveal, RevealText, Rule } from "./Reveal";

const steps = [
  {
    index: "01",
    title: "Vi köper fastigheten",
    body: "Ni säljer fastigheten till oss och frigör kapital som i stället kan användas där det gör mest nytta i verksamheten.",
  },
  {
    index: "02",
    title: "Ni stannar kvar",
    body: "Verksamheten fortsätter på samma adress. Skillnaden är att ni i stället hyr fastigheten av oss.",
  },
  {
    index: "03",
    title: "Vi tänker långsiktigt",
    body: "Vi tecknar ett långsiktigt hyresavtal och blir en stabil fastighetsägare och motpart över tid.",
  },
];

const pairRatio = nifelhem.width / nifelhem.height;

const photos = [
  { image: nifelhem, delay: 0 },
  { image: maskinisten, delay: 80 },
];

export const SaleLeaseback = () => (
  <section id="sale-leaseback" className="page py-section">
    <Rule />

    <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
      <Reveal className="md:col-span-3">
        <h2 className="text-meta uppercase opacity-50">Sale &amp; leaseback</h2>
      </Reveal>

      <div className="md:col-span-8 md:col-start-5">
        <p className="text-display-2 font-semibold">
          <RevealText text="Sälj fastigheten" className="block" />
          <RevealText text="och stanna kvar" delay={90} className="block" />
        </p>
        <Reveal delay={200}>
          <p className="mt-8 max-w-measure text-lead">
            Ni frigör kapitalet som finns bundet i fastigheten men fortsätter
            verksamheten precis som tidigare. Vi köper fastigheten och blir er
            långsiktiga hyresvärd.
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
                <h3 className="text-display-3 font-semibold">{step.title}</h3>
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
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 text-meta-lg uppercase"
          >
            Prata med oss om sale &amp; leaseback
            <span
              aria-hidden
              className="block h-px w-10 origin-left bg-current transition-transform duration-500 ease-vexa group-hover:scale-x-[1.6]"
            />
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
