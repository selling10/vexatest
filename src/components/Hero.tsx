import { Facade } from "./Facade";
import { Reveal, RevealText, Rule } from "./Reveal";

export const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-24 pt-28 md:pb-36 md:pt-36"
  >
    {/*
     * Fasaden förankras i herons topp (inte i botten/marklinjen),
     * så den inte följer med när viewport-höjden ändras.
     */}
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-32 z-0 h-[min(48vh,18rem)] w-[min(68%,18rem)] md:hidden"
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
        <div className="relative max-w-[20rem] py-6 sm:max-w-[28rem] md:max-w-[36rem] md:pb-10 md:pt-8 lg:max-w-[40rem]">
          {/* Mjuk rosa slöja bakom texten i mobilvy */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10 bg-gradient-to-r from-rosa from-55% via-rosa/90 to-transparent md:hidden"
          />
          <h1 className="text-display-1 font-semibold">
            <RevealText
              text="Vi köper din"
              className="block"
              delay={320}
              step={50}
            />
            <RevealText
              text="fastighet"
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
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 text-meta-lg uppercase"
            >
              Få ett indikativt bud
              <span
                aria-hidden
                className="block h-px w-10 origin-left bg-current transition-transform duration-500 ease-vexa group-hover:scale-x-[1.6]"
              />
            </a>
            <a
              href="#sa-fungerar-det"
              className="text-meta-lg uppercase opacity-50 transition-opacity duration-300 hover:opacity-100"
            >
              Läs mer om hur det fungerar
            </a>
          </Reveal>
        </div>

        <Rule delay={320} duration={1600} className="mt-10 md:mt-14" />
      </div>
    </div>
  </section>
);
