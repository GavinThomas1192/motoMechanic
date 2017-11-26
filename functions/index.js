const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// const mailTransport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: gmailEmail,
//         pass: gmailPassword
//     }
// });


exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
    console.log('HI')
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((event) => {
    console.log('INSIDE SEND WELCOME', event.data)
    const user = event.data; // The Firebase user.

    const email = user.email; // The email of the user.
    const displayName = user.displayName; // The display name of the user.
    // [END eventAttributes]

    return sendWelcomeEmail(email, displayName);
});


exports.sendByeEmail = functions.auth.user().onDelete(event => {
    console.log('user deleted')
});


