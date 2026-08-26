import { Facade } from "./Facade";
import { Cta } from "./Cta";
import { Reveal, RevealText, Rule } from "./Reveal";

export const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pb-20 pt-28 md:justify-end md:pb-36 md:pt-36"
  >
    {/*
     * Fasaden förankras i herons topp (inte i botten/marklinjen),
     * så den inte följer med när viewport-höjden ändras.
     */}
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-[clamp(7rem,22vh,10rem)] z-0 h-[min(40vh,16rem)] w-[min(68%,18rem)] md:hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, transparent 32%, black 85%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, transparent 32%, black 85%)",
      }}
    >
      <Facade
        bays={8}
        floors={3}
        drift={22}
        delay={180}
        className="absolute inset-y-0 right-0 h-full w-auto text-ink/40"
      />
    </div>

    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-28 z-0 hidden h-[min(70vh,40rem)] w-[min(58%,48rem)] md:block lg:top-32 lg:h-[min(78vh,46rem)]"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
      }}
    >
      <Facade
        bays={13}
        floors={3}
        drift={36}
        delay={180}
        className="absolute inset-y-0 right-0 h-full w-auto text-ink/70"
      />
    </div>

    <div className="page relative z-10">
      <div className="relative">
        <div className="relative max-w-[20rem] pb-6 sm:max-w-[28rem] md:max-w-[36rem] md:pb-10 md:pt-14 lg:max-w-[40rem]">
          {/* Mjuk rosa slöja bakom texten i mobilvy */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10 bg-gradient-to-r from-rosa from-55% via-rosa/90 to-transparent md:hidden"
          />
          <h1 className="text-[clamp(2.25rem,1.35rem+4.8vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            <RevealText
              text="Frigör kapitalet"
              className="block"
              delay={320}
              step={50}
            />
            <RevealText
              text="i din fastighet"
              className="block"
              delay={470}
              step={50}
            />
          </h1>

          <Reveal delay={620} className="mt-6 md:mt-8">
            <p className="text-lead opacity-70">
              Enkelt, tryggt och långsiktigt.
            </p>
          </Reveal>

          <Reveal
            delay={780}
            className="mt-10 flex flex-col items-start gap-4"
          >
            <Cta href="#kontakt" variant="primary" tone="light">
              Få ett indikativt bud
            </Cta>
            <Cta
              href="#sa-fungerar-det"
              variant="secondary"
              tone="light"
              className="pl-5"
            >
              Läs mer om hur det fungerar
            </Cta>
          </Reveal>
        </div>

        <Rule delay={320} duration={1600} className="mt-10 md:mt-14" />
      </div>
    </div>
  </section>
);
