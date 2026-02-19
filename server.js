const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER, // Use environment variables for security
//         pass: process.env.EMAIL_PASS, // Use environment variables for security
//     },
// });
app.post("/api/add-blog", (req, res) => {
  const { title, content, image } = req.body;

  // Save blog to your database or local JSON file
  // Example: append to blogs.json
  // fs.appendFileSync('blogs.json', JSON.stringify(req.body) + "\n");

  console.log("✅ New blog received:", title);
  res.status(200).json({ message: "Blog received successfully!" });
});
// Test transporter configuration
// transporter.verify((error) => {
//     if (error) {
//         console.error('Error with transporter configuration:', error);
//     } else {
//         console.log('Server is ready to send emails');
//     }
// });

// POST route to handle form submissions
// app.post('/send', (req, res) => {
//     const {name, email, message } = req.body;

//     // Validate request body
//     if (!name || !email || !message) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

    // // Email options
    // const mailOptions = {
    //     from: email, // Sender address
    //     to: process.env.EMAIL_USER, // Recipient address (your email)
    //     subject:`New Message from ${name}`, // Email subject
    //     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body
    // };

    // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             return res.status(500).json({ error: 'Failed to send email' });
//         }
//         console.log('Email sent:', info.response);
//         res.status(200).json({ message: 'Email sent successfully' });
//     });
// });
// console.log("E-mail user",process.env.EMAIL_USER);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});