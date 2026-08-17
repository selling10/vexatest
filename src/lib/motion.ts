import { useEffect, useRef, useState } from "react";

/**
 * En enda rAF-loop delas av all scroll-driven rörelse på sidan.
 * Frames schemaläggs bara som svar på scroll och resize, aldrig kontinuerligt.
 */
type Subscriber = () => void;

const subscribers = new Set<Subscriber>();
let frame = 0;
let listening = false;

const runFrame = () => {
  frame = 0;
  for (const subscriber of subscribers) subscriber();
};

const schedule = () => {
  if (frame) return;
  frame = requestAnimationFrame(runFrame);
};

const subscribe = (subscriber: Subscriber) => {
  subscribers.add(subscriber);

  if (!listening) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    listening = true;
  }

  schedule();

  return () => {
    subscribers.delete(subscriber);

    if (subscribers.size === 0 && listening) {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      listening = false;

      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    }
  };
};

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
};

type InViewOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export const useInView = <T extends Element>({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  once = true,
}: InViewOptions = {}) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
};

/** Sant när sidan har lämnat toppen. Byter bara state vid övergången. */
export const useScrolledPast = (offset = 8) => {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let current = false;

    return subscribe(() => {
      const next = window.scrollY > offset;
      if (next === current) return;
      current = next;
      setPast(next);
    });
  }, [offset]);

  return past;
};

/**
 * Progress 0–1 medan elementet passerar viewporten.
 * Skriver via callback istället för state, så scroll aldrig triggar re-render.
 */
export const useScrollProgress = <T extends Element>(
  onProgress: (progress: number) => void
) => {
  const ref = useRef<T | null>(null);
  const callback = useRef(onProgress);
  callback.current = onProgress;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      callback.current(0.5);
      return;
    }

    const measure = () => {
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const distance = rect.height + viewport;
      if (distance <= 0) return;

      callback.current(clamp((viewport - rect.top) / distance));
    };

    return subscribe(measure);
  }, []);

  return ref;
};

/**
 * Sätter --shift i pixlar på elementet. Avsiktligt hårt begränsad amplitud.
 */
export const useParallax = <T extends HTMLElement | SVGElement>(
  distance = 32
) => {
  const ref = useScrollProgress<T>((progress) => {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty(
      "--shift",
      `${((progress - 0.5) * -2 * distance).toFixed(2)}px`
    );
  });

  return ref;
};
