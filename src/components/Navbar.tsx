import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { useScrolledPast } from "@/lib/motion";
import { scrollTo } from "@/lib/smoothScroll";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sa-fungerar-det", label: "Så fungerar det" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#kontakt", label: "Kontakt" },
];

/**
 * Sant när en mörk sektion ligger bakom navbarens mittlinje.
 * Bygger på en tunn detektionsremsa istället för scroll-lyssnare.
 */
const useOnDarkSurface = () => {
  const [onDark, setOnDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-surface="dark"]')
    );

    if (sections.length === 0) {
      setOnDark(false);
      return;
    }

    const active = new Set<Element>();
    let observer: IntersectionObserver | null = null;

    const connect = () => {
      observer?.disconnect();

      const line = 36;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) active.add(entry.target);
            else active.delete(entry.target);
          }
          setOnDark(active.size > 0);
        },
        {
          rootMargin: `-${line}px 0px -${Math.max(
            0,
            window.innerHeight - line - 1
          )}px 0px`,
        }
      );

      for (const section of sections) observer.observe(section);
    };

    connect();
    window.addEventListener("resize", connect);

    return () => {
      window.removeEventListener("resize", connect);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return onDark;
};

export const Navbar = () => {
  const scrolled = useScrolledPast(8);
  const onDark = useOnDarkSurface();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollTo(href), 80);
      return;
    }

    scrollTo(href);
  };

  const inverted = onDark || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,color,backdrop-filter] duration-500 ease-vexa",
          "backdrop-blur-md",
          inverted ? "bg-ink/75 text-rosa" : "bg-rosa/75 text-ink"
        )}
      >
        <div
          className={cn(
            "page relative z-10 flex items-center justify-between transition-all duration-500 ease-vexa",
            scrolled ? "h-12 md:h-14" : "h-14 md:h-16"
          )}
        >
          <a
            href="/"
            aria-label="VEXA, till startsidan"
            onClick={(event) => {
              event.preventDefault();
              goTo("#top");
            }}
            className="relative z-10"
          >
            <Logo
              className={cn(
                "transition-all duration-500 ease-vexa",
                scrolled ? "h-7 md:h-8" : "h-8 md:h-9"
              )}
            />
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      goTo(link.href);
                    }}
                    className="group relative inline-block text-meta-lg uppercase"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-vexa group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobil-meny"
            onClick={() => setOpen((value) => !value)}
            className="relative z-10 -mr-1 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">{open ? "Stäng meny" : "Öppna meny"}</span>
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-vexa",
                  open ? "top-1.5 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-vexa",
                  open ? "top-1.5 -rotate-45" : "top-3"
                )}
              />
            </span>
          </button>
        </div>

        <span
          aria-hidden
          className={cn(
            "relative z-10 block h-px w-full origin-left bg-current transition-transform duration-500 ease-vexa",
            scrolled && !open ? "scale-x-100 opacity-15" : "scale-x-0 opacity-0"
          )}
        />

        {/* Mjuk uttoning så fasaden tonar bort bakom menyn i stället för att kapas */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 top-full h-12 bg-gradient-to-b to-transparent",
            inverted ? "from-ink/60" : "from-rosa/70"
          )}
        />
      </header>

      <div
        id="mobil-meny"
        hidden={!open}
        className={cn(
          "fixed inset-0 z-40 bg-ink text-rosa transition-opacity duration-500 ease-vexa md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav className="page flex h-full flex-col justify-end pb-[max(3rem,env(safe-area-inset-bottom))]">
          <ul>
            {links.map((link, index) => (
              <li key={link.href} className="border-t border-rosa/15">
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(link.href);
                  }}
                  className="block py-5 text-display-3"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-meta uppercase opacity-60">
            info@vexa.se, +46 (0) 79 307 80 20
          </p>
        </nav>
      </div>
    </>
  );
};
