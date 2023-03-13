const nodemailer = require('nodemailer');


//--------------------------------NodeMailer----------------------------------//
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mebournehotelhunter@gmail.com',
      pass: 'llyxeynlzauarudi'
    }
  });
  
  const mailOptions = {
    from: 'engr.zafarahmed@gmail.com',
    to: 'zafar_Fast@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

  module.exports = {transporter, mailOptions}