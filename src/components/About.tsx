import { quay } from "@/assets/images";
import { Brand } from "./Brand";
import { Frame } from "./Frame";
import { Reveal, RevealText, Rule } from "./Reveal";

export const About = () => (
  <section id="om-oss" className="page py-section">
    <Rule />

    <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
      <Reveal className="md:col-span-2">
        <h2 className="text-meta uppercase opacity-50">Om oss</h2>
      </Reveal>

      <div className="md:col-span-9 md:col-start-4">
        <p className="text-display-2 font-semibold">
          <RevealText text="Vi investerar långsiktigt" className="block" />
        </p>
      </div>
    </div>

    <div className="mt-16 grid items-start gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
      <Reveal className="md:col-span-5">
        <div className="space-y-6 max-w-measure text-body">
          <p>
            <Brand /> Industrihus grundades 2018. Vi investerar i
            handels-, industri- och bostadsfastigheter över hela Sverige,
            genom både vanliga förvärv och sale &amp; leaseback.
          </p>
          <p className="opacity-70">
            Vi har ett långsiktigt perspektiv på våra investeringar. För oss
            handlar det inte bara om att köpa en fastighet, utan om att förstå
            vad som finns bakom den, verksamheten, människorna och
            förutsättningarna för att skapa värde över tid.
          </p>
          <p className="opacity-70">
            Bakom <Brand /> finns lång erfarenhet av att bygga, driva och
            utveckla företag, både i Sverige och internationellt. Det gör att
            vi förstår både fastighetsägarens och företagarens perspektiv.
          </p>
          <p className="opacity-70">
            Vi tror på enkla processer, tydliga besked och långsiktiga
            relationer. För oss är en bra affär en affär där båda parter känner
            sig nöjda även långt efter att den är genomförd.
          </p>
        </div>
      </Reveal>

      <Frame
        image={quay}
        sizes="(min-width: 768px) 55vw, 100vw"
        className="md:col-span-6 md:col-start-7"
      />
    </div>
  </section>
);
