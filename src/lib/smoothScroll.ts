import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/*
 * Mjuk skrollning. En enda instans äger sidans scrollposition, och all
 * programstyrd skrollning måste gå genom den: webbläsarens egen mjuka
 * skrollning skriver samma position varje bildruta som Lenis gör, och de två
 * drar då åt olika håll.
 *
 * Instansen startas inte alls när besökaren har bett om mindre rörelse. Då
 * lämnas skrollningen helt orörd, och hjälparen nedan faller tillbaka på
 * webbläsarens egna medel.
 */
let lenis: Lenis | null = null;

/** Fast menyhöjd, så målet inte hamnar bakom headern. */
const HEADER_OFFSET = -72;

const isSamePageHash = (anchor: HTMLAnchorElement, href: string) => {
  if (!href.startsWith("#") || href === "#") return false;

  try {
    const url = new URL(anchor.href, window.location.href);
    return (
      url.pathname === window.location.pathname &&
      url.search === window.location.search
    );
  } catch {
    return false;
  }
};

const onDocumentClick = (event: MouseEvent) => {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const anchor = target.closest("a");
  if (!(anchor instanceof HTMLAnchorElement)) return;

  const href = anchor.getAttribute("href");
  if (!href || !isSamePageHash(anchor, href)) return;

  event.preventDefault();
  scrollTo(href);
  window.history.pushState(null, "", href);
};

/** Startar den mjuka skrollningen och returnerar en avstädare. */
const start = () => {
  document.addEventListener("click", onDocumentClick);

  if (lenis) {
    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }

  lenis = new Lenis({
    lerp: 0.09,
    wheelMultiplier: 0.9,
    autoRaf: true,
  });

  return () => {
    document.removeEventListener("click", onDocumentClick);
    lenis?.destroy();
    lenis = null;
  };
};

export const useSmoothScroll = () => {
  useEffect(start, []);
};

/**
 * Skrollar till en väljare eller en position. Går genom Lenis när den är igång,
 * annars genom webbläsaren.
 */
export const scrollTo = (target: string | number, immediate = false) => {
  if (lenis) {
    lenis.scrollTo(target, { immediate, offset: HEADER_OFFSET });
    return;
  }

  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: immediate ? "auto" : "smooth" });
    return;
  }

  const element = document.querySelector(target);
  if (!(element instanceof HTMLElement)) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;

  window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
};
