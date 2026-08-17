import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal, RevealText, Rule } from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const fields = [
  { name: "namn", label: "Namn", type: "text", autoComplete: "name" },
  { name: "epostadress", label: "E-post", type: "email", autoComplete: "email" },
  {
    name: "telefonnummer",
    label: "Telefon (valfritt)",
    type: "tel",
    autoComplete: "tel",
  },
] as const;

const inputClass =
  "w-full border-0 border-b border-rosa/25 bg-transparent py-3 text-body text-rosa " +
  "transition-colors duration-300 ease-vexa placeholder:text-rosa/30 " +
  "hover:border-rosa/50 focus:border-rosa focus-visible:outline-offset-2";

export const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          namn: data.get("namn"),
          epostadress: data.get("epostadress"),
          telefonnummer: data.get("telefonnummer"),
          meddelande: data.get("meddelande"),
        }),
      });

      if (!response.ok) throw new Error("Kunde inte skicka");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" data-surface="dark" className="bg-ink text-rosa">
      <div className="page py-section">
        <Rule />

        <div className="mt-12 grid gap-16 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 className="text-display-2 font-semibold">
              <RevealText text="Vill ni prata om er fastighet?" className="block" />
            </h2>

            <Reveal delay={220} className="mt-8 max-w-measure text-body opacity-70">
              <p>
                Skicka några rader eller slå oss en signal. Vi återkommer gärna
                med våra tankar och, om det är aktuellt, ett indikativt bud.
              </p>
            </Reveal>

            <Reveal delay={320} className="mt-12">
              <p className="text-meta uppercase opacity-50">Direkt</p>
              <a
                href="mailto:info@vexa.se"
                className="mt-4 block text-display-3 font-semibold transition-opacity duration-300 ease-vexa hover:opacity-60"
              >
                info@vexa.se
              </a>
              <a
                href="tel:+46793078020"
                className="mt-2 block text-display-3 font-semibold transition-opacity duration-300 ease-vexa hover:opacity-60"
              >
                079 307 80 20
              </a>
            </Reveal>
          </div>

          <Reveal delay={160} className="md:col-span-6 md:col-start-7">
            {status === "sent" ? (
              <div className="border-t border-rosa/25 pt-8">
                <p className="text-display-3 font-semibold">Tack.</p>
                <p className="mt-4 max-w-measure text-body opacity-70">
                  Vi har fått din förfrågan och återkommer vanligtvis inom 24
                  timmar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="text-meta uppercase opacity-50">
                  Få ett indikativt bud
                </p>

                <div className="mt-12 space-y-8 md:mt-14">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="text-meta uppercase opacity-50"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required={field.name !== "telefonnummer"}
                        className={inputClass}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="meddelande"
                      className="text-meta uppercase opacity-50"
                    >
                      Om fastigheten
                    </label>
                    <textarea
                      id="meddelande"
                      name="meddelande"
                      rows={4}
                      required
                      placeholder="Adress och några grundläggande uppgifter"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-3 text-meta-lg uppercase disabled:opacity-40"
                  >
                    {status === "sending" ? "Skickar" : "Skicka"}
                    <span
                      aria-hidden
                      className="block h-px w-10 origin-left bg-current transition-transform duration-500 ease-vexa group-hover:scale-x-[1.6]"
                    />
                  </button>

                  {status === "error" && (
                    <p role="alert" className="text-body opacity-70">
                      Det gick inte att skicka. Mejla oss på info@vexa.se.
                    </p>
                  )}
                </div>

                <p className="mt-8 text-meta uppercase leading-relaxed opacity-40">
                  Uppgifterna används bara för att svara dig.{" "}
                  <Link
                    to="/privacy-policy"
                    className="underline underline-offset-4"
                  >
                    Integritetspolicy
                  </Link>
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
