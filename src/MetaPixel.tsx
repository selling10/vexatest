import { useEffect } from "react";

type FbqStub = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: (...args: unknown[]) => void;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: FbqStub;
    _fbq?: FbqStub;
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
      stub.queue = stub.queue || [];
      if (stub.callMethod) {
        stub.callMethod(...args);
      } else {
        stub.queue.push(args);
      }
    } as FbqStub;

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
