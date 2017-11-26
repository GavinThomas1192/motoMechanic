const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
    console.log('HI')
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((event, response) => {
    response.send('User Created')
});


exports.sendByeEmail = functions.auth.user().onDelete(event => {
    console.log('user deleted')
});