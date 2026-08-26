import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { smtpConfig } from './lib/smtp-config.js';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
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

  // SMTP credentials - update these with your info@vexa.se credentials
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

  console.log('Attempting to send email...');
  console.log('SMTP_HOST:', SMTP_HOST);
  console.log('SMTP_USER:', SMTP_USER);
  console.log('SMTP_FROM:', SMTP_FROM);
  console.log('SMTP_TO:', SMTP_TO);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    requireTLS: !SMTP_SECURE,
    tls: {
      minVersion: "TLSv1.2",
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
    console.log('Email sent successfully: ', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    const error = err;
    console.error('Error sending email: ', error);
    res.status(500).json({ 
      message: 'Error sending email', 
      error: error.message,
      details: error.toString()
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Make sure to set SMTP credentials in .env file');
});
