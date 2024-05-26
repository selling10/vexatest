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
    secure: SMTP_SECURE === 'true', // true for 465, false for other ports
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
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    const error = err as Error; // Cast the error to Error type
    console.error('Error sending email: ', error.message);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
};
