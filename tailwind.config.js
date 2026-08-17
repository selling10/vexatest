/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rosa: {
          DEFAULT: "var(--rosa)",
          veil: "var(--rosa-veil)",
          deep: "var(--rosa-deep)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          true: "var(--ink-true)",
        },
      },
      fontFamily: {
        sans: [
          "Inter Tight Variable",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      /* Optisk tracking parad med varje grad — tätare desto större */
      fontSize: {
        meta: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.14em" }],
        "meta-lg": ["0.75rem", { lineHeight: "1.3", letterSpacing: "0.12em" }],
        body: [
          "clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)",
          { lineHeight: "1.6", letterSpacing: "-0.005em" },
        ],
        lead: [
          "clamp(1.125rem, 1rem + 0.7vw, 1.5rem)",
          { lineHeight: "1.45", letterSpacing: "-0.015em" },
        ],
        "display-3": [
          "clamp(1.5rem, 1.2rem + 1.4vw, 2.25rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        "display-2": [
          "clamp(2rem, 1.3rem + 3.4vw, 4.25rem)",
          { lineHeight: "1", letterSpacing: "-0.035em" },
        ],
        "display-1": [
          "clamp(2.75rem, 1.4rem + 7.2vw, 8.5rem)",
          { lineHeight: "0.92", letterSpacing: "-0.045em" },
        ],
      },
      maxWidth: {
        page: "var(--page-max)",
        measure: "62ch",
        "measure-sm": "44ch",
      },
      spacing: {
        gutter: "var(--gutter)",
        section: "var(--section)",
      },
      transitionTimingFunction: {
        vexa: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
