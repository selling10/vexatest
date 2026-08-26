import { Link } from "react-router-dom";
import { Brand } from "./Brand";
import { Logo } from "./Logo";
import { Reveal, Rule } from "./Reveal";

const year = new Date().getFullYear();

export const Footer = () => (
  <footer data-surface="dark" className="bg-ink text-rosa">
    <div className="page pb-12 pt-section">
      <Rule />

      <div className="grid gap-12 pt-12 md:grid-cols-12 md:gap-8 md:pt-16">
        <Reveal className="md:col-span-5">
          <Logo className="h-10 md:h-12" />
          <p className="mt-6 max-w-measure-sm text-body opacity-70">
            Vi köper handels-, industri- och bostadsfastigheter runt om i
            Sverige, för långsiktigt ägande.
          </p>
        </Reveal>

        <Reveal delay={80} className="md:col-span-3 md:col-start-7">
          <h2 className="text-meta uppercase opacity-50">Kontakt</h2>
          <ul className="mt-4 space-y-1 text-body">
            <li>
              <a
                href="mailto:info@vexa.se"
                className="transition-opacity duration-300 hover:opacity-60"
              >
                info@vexa.se
              </a>
            </li>
            <li>
              <a
                href="tel:+46793078020"
                className="transition-opacity duration-300 hover:opacity-60"
              >
                +46 (0) 79 307 80 20
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={140} className="md:col-span-3 md:col-start-10">
          <h2 className="text-meta uppercase opacity-50">Bolag</h2>
          <ul className="mt-4 space-y-1 text-body">
            <li className="opacity-70">VEXA Industrihus AB</li>
            <li className="opacity-70">Grev Turegatan 26, 114 38 Stockholm</li>
            <li className="opacity-70">Org.nr 559044-8337</li>
            <li>
              <Link
                to="/privacy-policy"
                className="underline decoration-rosa/30 underline-offset-4 transition-colors duration-300 hover:decoration-rosa"
              >
                Integritets- och cookiepolicy
              </Link>
            </li>
          </ul>
        </Reveal>
      </div>

      <p className="mt-16 text-meta uppercase opacity-40 md:mt-24">
        © {year} <Brand />
      </p>
    </div>
  </footer>
);
