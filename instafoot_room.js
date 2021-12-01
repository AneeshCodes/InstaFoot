username = localStorage.getItem("username")
document.getElementById('username').innerHTML = "Welcome to InstaFoot " + username + "!";

//ADD YOUR FIREBASE LINKS HERE

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

function logout()
{
  localStorage.removeItem("username");
  window.location = "index.html"
}

function addroom() {
      roomname = document.getElementById('roomname').value;
      firebase.database().ref("/").child(roomname).update({
            roomname: "value"
      })

      localStorage.setItem('Room_Name', roomname);
      window.location = "instafoot_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("trendingrooms").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>"
                  document.getElementById('trendingrooms').innerHTML +=  row; 
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem('Room_Name', name)
  window.location = "instafoot_page.html"       
}