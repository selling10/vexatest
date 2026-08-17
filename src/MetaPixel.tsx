import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Meta Pixel. ID via VITE_META_PIXEL_ID. Utan ID gör komponenten ingenting.
 */
const MetaPixel = () => {
  useEffect(() => {
    const pixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
    if (!pixelId || window.fbq) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    const stub = function (...args: unknown[]) {
      (stub as { callMethod?: (...a: unknown[]) => void; queue?: unknown[] }).queue =
        (stub as { queue?: unknown[] }).queue || [];
      if ((stub as { callMethod?: (...a: unknown[]) => void }).callMethod) {
        (stub as { callMethod: (...a: unknown[]) => void }).callMethod(...args);
      } else {
        (stub as { queue: unknown[] }).queue.push(args);
      }
    } as typeof window.fbq & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      push?: (...args: unknown[]) => void;
      loaded?: boolean;
      version?: string;
    };

    stub.push = stub;
    stub.loaded = true;
    stub.version = "2.0";
    stub.queue = [];
    window.fbq = stub;
    window._fbq = stub;

    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
  }, []);

  return null;
};

export default MetaPixel;
