const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors()); // Add this line to enable CORS

app.use(bodyParser.json());



app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received request:', { name, email, message });
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'malikwaqas.ak7@gmail.com',
      pass: 'Waqas.ak7',
    },
  });

  const mailOptions = {
    from: 'malikwaqas.ak7@gmail.com',
    to: 'www.waqas1122mw.ww@gmail.com',
    subject: 'New Contact Form Submission',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error sending email:', error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
