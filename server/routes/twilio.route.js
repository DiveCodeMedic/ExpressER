const myPhoneNumber = process.env.TWILIO_PHONE;
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;
const Twilio = require('twilio');

const router = require('express').Router();
const twilioClient = new Twilio(accountSid, authToken);
const db = require('../models');

router.post('/sendMessage', (req, res) => {
    const message = 
    `You have been checked-in! Please have a seat and we will text/call your name when the doctor is ready to see you.`
    twilioClient
        .messages
        .create({
            body: message,
            to: myPhoneNumber, 
            from: '+16192028578' 
        })
        .then(function(message) {
            res.send('ok');
        });
});


module.exports = router;
