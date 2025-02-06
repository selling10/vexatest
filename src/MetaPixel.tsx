import { useEffect } from "react";

const MetaPixel = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const fbq = (window as any).fbq; // TypeScript workaround
      if (typeof fbq !== "function") {
        (function (f: any, b, e, v, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

        (window as any).fbq("init", "578156081710568");
        (window as any).fbq("track", "PageView");
      }
    }
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=578156081710568&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
};

export default MetaPixel;
