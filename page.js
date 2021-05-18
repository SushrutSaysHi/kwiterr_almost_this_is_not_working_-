var firebaseConfig = {
  apiKey: "AIzaSyAvPj0FIorjjEKPHIbuuQEqu2_1aIQQWUU",
  authDomain: "sushrut-ypam.firebaseapp.com",
  databaseURL: "https://sushrut-ypam-default-rtdb.firebaseio.com",
  projectId: "sushrut-ypam",
  storageBucket: "sushrut-ypam.appspot.com",
  messagingSenderId: "238204360898",
  appId: "1:238204360898:web:166d46978068489ed6835b",
  measurementId: "G-90VZBLDD3Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  username = localStorage.getItem("username");
  roomname = localStorage.getItem("room_name");
  message = document.getElementById("message").value;

  function send(){
    firebase.database().ref(room_name).push({
        purpose: "Message", 
        Likes: 0, 
        Message: message, 
        Name: username
    });
  }

  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();