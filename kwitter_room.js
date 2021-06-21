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
  var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function addRoom()
  {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
     });
     localStorage.setItem("room_name", room_name);
  
     window.location = "kwitter_page.html";
  }
  function redirectToRoomName(name)
  {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
  }
  function logout()
  {
     localStorage.removeItem("room_name", room_name);
     localStorage.removeItem("user_name", user_name);
     window.location="index.html";
  }