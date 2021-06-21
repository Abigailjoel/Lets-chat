var firebaseConfig = {
    apiKey: "AIzaSyATk0pSK_jWlbShg937x369xK4COeIQmVM",
    authDomain: "lets-chat-22368.firebaseapp.com",
    databaseURL: "https://lets-chat-22368-default-rtdb.firebaseio.com",
    projectId: "lets-chat-22368",
    storageBucket: "lets-chat-22368.appspot.com",
    messagingSenderId: "513635404810",
    appId: "1:513635404810:web:011c87091848bb2957e3f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
