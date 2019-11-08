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

const messageAppReference = firebase.database();

const getPosts = () => {
  messageAppReference.ref('messages').on('value', function(results) {
    const messageBoard = document.querySelector('.message-board');
    const messages = [];
    const allMsgs = results.val(); // Firebase SDK method to get data from API response

    for (let msg in allMsgs) {
      const message = allMsgs[msg].message;
      const votes = allMsgs[msg].votes;
      const messageListElement = document.createElement('li');

      const deleteElement = document.createElement('i');
      deleteElement.classList.add('fa', 'fa-trash', 'pull-right', 'delete');
      deleteElement.addEventListener('click', function(event) {
        const id = event.target.parentNode.dataset.id;
        deleteMessage(id);
      });

      const upVoteElement = document.createElement('i');
      upVoteElement.classList.add('fa', 'fa-thumbs-up', 'pull-right');
      upVoteElement.addEventListener('click', function(event) {
        const id = event.target.parentNode.dataset.id;
        const newVotes = allMsgs[id].votes + 1;
        updateMessage(id, newVotes); 
      });

      const downVoteElement = document.createElement('i');
      downVoteElement.classList.add('fa', 'fa-thumbs-down', 'pull-right');
      downVoteElement.addEventListener('click', function(event) {
        const id = event.target.parentNode.dataset.id;
        const newVotes = allMsgs[id].votes - 1;
        updateMessage(id, newVotes); 
      })

      messageListElement.dataset.id = msg;
      messageListElement.textContent = message;
      messageListElement.appendChild(deleteElement);
      messageListElement.appendChild(upVoteElement);
      messageListElement.appendChild(downVoteElement);
      let votesDiv = document.createElement('div');
      votesDiv.className = 'pull-right';
      votesDiv.textContent = votes;
      messageListElement.appendChild(votesDiv);
      messages.push(messageListElement);
    }
    while(messageBoard.firstChild) {
      messageBoard.removeChild(messageBoard.firstChild);
    }
    messages.forEach((element) => {
      messageBoard.appendChild(element);
    });
  });
};

const updateMessage = (id, votes) => {
  const messageReference = messageAppReference.ref('messages').child(id);
  messageReference.update({
    votes: votes,
  });
};

const deleteMessage = (id) => {
  // find message whose objectId is equal to the id we're searching with
  const messageReference =  messageAppReference.ref('messages').child(id);
  messageReference.remove();
};

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#message-form').addEventListener('submit', function() {
    event.preventDefault();
    const message = document.querySelector('#message').value;
    document.querySelector('#message').value = '';
    const messagesReference = messageAppReference.ref('messages');
    messagesReference.push({
      message: message,
      votes: 0,
    });
  });
  getPosts();
});