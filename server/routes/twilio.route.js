const myPhoneNumber = process.env.TWILIO_PHONE;
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;
const Twilio = require('twilio');

const router = require('express').Router();
const twilioClient = new Twilio(accountSid, authToken);
const db = require('../models');

router.post('/sendMessage', (req, res) => {
    console.log(req.body);
    let textNumber = '+1' + req.body.patient.mobilePhone;
    console.log(textNumber);
    const message = 
    `You have been checked-in! Please 
    have a seat and we will text/Call your name
    when the doctor is ready to see you.
    `
    twilioClient
        .messages
        .create({
            body: message,
            to: textNumber, 
            from: '+16192028578' 
        })
        .then(function(message) {
            res.send('ok');
        });
});


module.exports = router;
