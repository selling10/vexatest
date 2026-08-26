export function envVar(name: string, fallback?: string): string;
export function smtpConfig(): {
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_SECURE: boolean;
  SMTP_USER: string;
  SMTP_PASS: string;
  SMTP_FROM: string;
  SMTP_TO: string;
};
