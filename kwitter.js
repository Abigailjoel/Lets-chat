function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}
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
