//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBbnoC3DASnA7AHmq-9tVA1B2O-5AaDk-c",
      authDomain: "instafoot-35022.firebaseapp.com",
      databaseURL: "https://instafoot-35022-default-rtdb.firebaseio.com",
      projectId: "instafoot-35022",
      storageBucket: "instafoot-35022.appspot.com",
      messagingSenderId: "844807225084",
      appId: "1:844807225084:web:506852c637a0a172056179"
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

//End code
      } });  }); }
getData();
