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
    text: `Welcome to Melboure Hotel Hunter!
    
    Welcome to Melbourne Hotel Hunter, a website that provides a platform for users to review and rate 5-star hotels in Melbourne, Australia.

The website is designed to make it easy for users to share their experiences and opinions about the hotels they've stayed in, and to help other travelers make informed decisions when choosing a place to stay in Melbourne.

Users can browse reviews and ratings from other users to get a sense of the quality and value of each hotel.

Each hotel listing includes detailed information about the property, photos, and location. Users can leave a written review on each hotel.

Overall, Melbourne Hotel Reviews is a valuable resource for anyone who is looking to book a 5-star hotel in Melbourne, and who wants to hear from other travelers about their experiences and recommendations.

`
  };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

  module.exports = {transporter, mailOptions}