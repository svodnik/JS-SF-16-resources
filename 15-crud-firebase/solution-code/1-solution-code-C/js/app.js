'use strict';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDC2pXQItY5nLBZdyfOvvu3EzfbnS2iQvQ",
    authDomain: "cheshire-windowblind.firebaseapp.com",
    databaseURL: "https://cheshire-windowblind.firebaseio.com",
    projectId: "cheshire-windowblind",
    storageBucket: "cheshire-windowblind.appspot.com",
    messagingSenderId: "12369391164",
    appId: "1:12369391164:web:243a922a398b0536"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// https://firebase.google.com/docs/reference/js/firebase.database
const messageAppReference = firebase.database();

$(function() {
    $('#message-form').submit(function (event) {
        // by default a form submit reloads the DOM which will subsequently reload all our JS
        // to avoid this we preventDefault()
        event.preventDefault()

        // grab user message input
        const message = $('#message').val()

        // clear message input (for UX purposes)
        $('#message').val('')

        // create a section for messages data in your db
        const messagesReference = messageAppReference.ref('messages');

        // use the push method to save data to the messages
        // https://firebase.google.com/docs/reference/js/firebase.database.Reference#push
        messagesReference.push({
            message: message,
            votes: 0
        });
        console.log(messagesReference);
    });
});


