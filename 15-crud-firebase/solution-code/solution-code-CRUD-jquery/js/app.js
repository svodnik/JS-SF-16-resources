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

// connect to your Firebase application using your reference URL
const messageAppReference = firebase.database();
    
$(document).ready(function() {
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
  });
  getPosts();
});

function getPosts() {
  // retrieve messages data when .on() initially executes
  // and when its data updates
  // see https://firebase.google.com/docs/reference/js/firebase.database.Reference#on
  messageAppReference.ref('messages').on('value', function (results) {
    const $messageBoard = $('.message-board');
    const messages = [];

    const allMsgs = results.val();
    // iterate through results coming from database call; messages
    for (let msg in allMsgs) {
      const message = allMsgs[msg].message;
      const votes = allMsgs[msg].votes;

      // create message element
      const $messageListElement = $('<li>');

      // create delete element
      const $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>')
      $deleteElement.on('click', function (e) {
        const id = $(e.target.parentNode).data('id')
        deleteMessage(id)
      });

      // create up vote element
      const $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>')
      $upVoteElement.on('click', function (e) {
        const id = $(e.target.parentNode).data('id');
        updateMessage(id, ++allMsgs[id].votes); //votes variable stores value independent of node id. this change targets the id.
      });

      // create down vote element
      const $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>')
      $downVoteElement.on('click', function (e) {
        const id = $(e.target.parentNode).data('id');
        updateMessage(id, --allMsgs[id].votes);
      });

      // add id as data attribute so we can refer to later for updating
      $messageListElement.attr('data-id', msg)
        .text(message)  // add message to li
        .append($deleteElement) // add delete element
        .append($upVoteElement) // add voting elements
        .append($downVoteElement)
        .append('<div class="pull-right">' + votes + '</div>');
      // push element to array of messages -- this is pushing to an array, not HTTP push
      messages.push($messageListElement); // show votes
    }
      
    // remove lis to avoid dupes 
    // .empty() is a jQuery method to remove all child nodes
    // http://api.jquery.com/empty/
    $messageBoard.empty();
    messages.forEach((element) => {
      messageBoard.appendChild(element);
    });
  });
}

function updateMessage(id, votes) {
  // find message whose objectId is equal to the id we're searching with
  const messageReference =  messageAppReference.ref('messages').child(id);

  // update votes property
  messageReference.update({
    votes: votes
  });
}

function deleteMessage(id) {
  // find message whose objectId is equal to the id we're searching with
  const messageReference =  messageAppReference.ref('messages').child(id);

  messageReference.remove();
}