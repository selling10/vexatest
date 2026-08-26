/** Normaliserar .env-värden (t.ex. avslutande \\ från radbrytning). */
export function envVar(name, fallback = "") {
  const raw = process.env[name] ?? fallback;
  return raw.trim().replace(/[\s\\]+$/g, "");
}

export function smtpConfig() {
  const SMTP_HOST = envVar("SMTP_HOST", "smtp.websupport.se");
  const SMTP_PORT = parseInt(envVar("SMTP_PORT", "587"), 10);
  const SMTP_SECURE = envVar("SMTP_SECURE", "false") === "true";
  const SMTP_USER = envVar("SMTP_USER", "info@vexa.se");
  const SMTP_PASS = envVar("SMTP_PASS");
  const SMTP_FROM = envVar("SMTP_FROM", "info@vexa.se");
  const SMTP_TO = envVar("SMTP_TO", "info@vexa.se");

  return {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO,
  };
}
