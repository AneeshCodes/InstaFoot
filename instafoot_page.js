//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC0xqt0EWw_oe1EeqrUuiRk18UcPW8X33w",
      authDomain: "insta-foot.firebaseapp.com",
      databaseURL: "https://insta-foot-default-rtdb.firebaseio.com",
      projectId: "insta-foot",
      storageBucket: "insta-foot.appspot.com",
      messagingSenderId: "502487673628",
      appId: "1:502487673628:web:61e1217077e5e8c940e8d9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    username = localStorage.getItem("username");
    room_name = localStorage.getItem("Room_Name");

function send()
{
      msg = document.getElementById('msg').value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById('msg').value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like']

namewithtag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>"
messagewithtag = "<h4 class='message_h4'>" + message + "</h4>"
likebutton = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"
spanwidthtag = "<span  class='glyphicon glyphicon-thumbs-up'>like: " + like + "</span></button><hr>"

row = namewithtag + messagewithtag + likebutton + spanwidthtag
document.getElementById('output').innerHTML += row;     
//End code
      } });  }); }
getData();



function logout()
{
  localStorage.removeItem("username");
  localStorage.removeItem("Room_Name");
  window.location = "index.html";
}