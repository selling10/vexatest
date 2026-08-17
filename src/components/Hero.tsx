import { Facade } from "./Facade";
import { Reveal, RevealText, Rule } from "./Reveal";

export const Hero = () => (
  <section
    id="top"
    className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-24 pt-28 md:pb-36 md:pt-36"
  >
    <div className="page relative">
      <div className="relative">
        {/*
         * Fasaden ritas från marklinjen och upp. Masken tonar vänsterkanten
         * mot texten så de möts i stället för att krocka.
         */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-14 right-0 z-0 h-[min(62vh,26rem)] w-[min(100%,42rem)] md:-bottom-20 md:h-[min(72vh,38rem)] md:w-[min(58%,48rem)] lg:h-[min(78vh,42rem)]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
          }}
        >
          <Facade
            bays={10}
            floors={3}
            drift={22}
            delay={180}
            className="absolute inset-y-0 right-0 h-full w-auto text-ink/70 md:hidden"
          />
          <Facade
            bays={13}
            floors={3}
            drift={36}
            delay={180}
            className="absolute inset-y-0 right-0 hidden h-full w-auto text-ink/70 md:block"
          />
        </div>

        <div className="relative z-10 max-w-[36rem] py-6 md:pb-10 md:pt-8 lg:max-w-[40rem]">
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
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8"
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

        {/* Marklinjen i fasadens bas, utan extra sektionhöjd */}
        <Rule
          delay={320}
          duration={1600}
          className="absolute inset-x-0 -bottom-20 md:-bottom-28"
        />
      </div>
    </div>
  </section>
);
