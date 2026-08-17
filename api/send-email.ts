import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

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

  // SMTP credentials for info@vexa.se
  const SMTP_HOST = process.env.SMTP_HOST || 'smtp.websupport.se';
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
  const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
  const SMTP_USER = process.env.SMTP_USER || 'info@vexa.se';
  const SMTP_PASS = process.env.SMTP_PASS || '';
  const SMTP_FROM = process.env.SMTP_FROM || 'info@vexa.se';
  const SMTP_TO = process.env.SMTP_TO || 'info@vexa.se';

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE, // false for TLS
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
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
    const error = err as Error; // Cast the error to Error type
    console.error('Error sending email: ', error.message);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
};
