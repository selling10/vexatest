import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { namn, telefonnummer, epostadress, företagsnamn, adress, postnummer, ort } = req.body;

  // SMTP credentials - update these with your info@vexa.se credentials
  const SMTP_HOST = process.env.SMTP_HOST || 'smtp.websupport.se';
  const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
  const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
  const SMTP_USER = process.env.SMTP_USER || 'info@vexa.se';
  const SMTP_PASS = process.env.SMTP_PASS || '';
  const SMTP_FROM = process.env.SMTP_FROM || 'info@vexa.se';
  const SMTP_TO = process.env.SMTP_TO || 'info@vexa.se';

  console.log('Attempting to send email...');
  console.log('SMTP_HOST:', SMTP_HOST);
  console.log('SMTP_USER:', SMTP_USER);
  console.log('SMTP_FROM:', SMTP_FROM);
  console.log('SMTP_TO:', SMTP_TO);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE, // false for TLS
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const mailOptions = {
    from: SMTP_FROM,
    to: SMTP_TO,
    replyTo: epostadress, // Set Reply-To to the email address from the form
    subject: 'Ny ansökan Vexa Industrihus',
    text: `Namn: ${namn}\nTelefon: ${telefonnummer}\nE-post: ${epostadress}\nFöretagsnamn: ${företagsnamn}\nAdress: ${adress}\nPostnummer: ${postnummer}\nOrt: ${ort}`,
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
