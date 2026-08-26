import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { smtpConfig } from '../lib/smtp-config.js';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const {
    namn,
    telefonnummer,
    epostadress,
    meddelande,
    företagsnamn,
    adress,
    postnummer,
    ort,
  } = req.body ?? {};

  if (!namn || !epostadress) {
    res.status(400).json({ message: 'Namn och e-post krävs' });
    return;
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO,
  } = smtpConfig();

  if (!SMTP_PASS) {
    res.status(500).json({ message: 'SMTP-uppgifter saknas på servern' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    ...(SMTP_SECURE
      ? { tls: { minVersion: "TLSv1.2" } }
      : { requireTLS: true, tls: { minVersion: "TLSv1.2" } }),
  });

  const plats = [adress, postnummer, ort].filter(Boolean).join(', ');

  const text = [
    `Namn: ${namn}`,
    `E-post: ${epostadress}`,
    telefonnummer && `Telefon: ${telefonnummer}`,
    företagsnamn && `Företag: ${företagsnamn}`,
    plats && `Adress: ${plats}`,
    meddelande && `\nMeddelande:\n${meddelande}`,
  ]
    .filter(Boolean)
    .join('\n');

  const mailOptions = {
    from: SMTP_FROM,
    to: SMTP_TO,
    replyTo: epostadress, // Set Reply-To to the email address from the form
    subject: 'Ny förfrågan via vexa.se',
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    const error = err as Error;
    console.error('Error sending email: ', error.message);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
};
