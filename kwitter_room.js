const firebaseConfig = {
      apiKey: "AIzaSyD1I0tqjFgLZhWuQCf1OizIk8fzgS3VMqw",
      authDomain: "kwitter-90s.firebaseapp.com",
      databaseURL: "https://kwitter-90s-default-rtdb.firebaseio.com",
      projectId: "kwitter-90s",
      storageBucket: "kwitter-90s.appspot.com",
      messagingSenderId: "323377999314",
      appId: "1:323377999314:web:f83ef04a661fe15b6dac0b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name+" !";

function addroom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room name- " + Room_names);
      row="<div class='room_name' id ="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });
});
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}