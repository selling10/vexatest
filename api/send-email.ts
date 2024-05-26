import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { namn, telefonnummer, epostadress, organisationsnummer, adress, postnummer, ort } = req.body;

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_SECURE || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO) {
    res.status(500).json({ message: 'SMTP configuration is incomplete' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT, 10),
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const mailOptions = {
    from: SMTP_FROM,
    to: SMTP_TO,
    subject: 'New Application Form Submission',
    text: `Name: ${namn}\nPhone: ${telefonnummer}\nEmail: ${epostadress}\nOrganization Number: ${organisationsnummer}\nAddress: ${adress}\nPostal Code: ${postnummer}\nCity: ${ort}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      res.status(500).json({ message: 'Error sending email', error: error.message });
    } else {
      console.error('Unknown error:', error);
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
