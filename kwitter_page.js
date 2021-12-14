user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
      apiKey: "AIzaSyD1I0tqjFgLZhWuQCf1OizIk8fzgS3VMqw",
      authDomain: "kwitter-90s.firebaseapp.com",
      databaseURL: "https://kwitter-90s-default-rtdb.firebaseio.com",
      projectId: "kwitter-90s",
      storageBucket: "kwitter-90s.appspot.com",
      messagingSenderId: "323377999314",
      appId: "1:323377999314:web:f83ef04a661fe15b6dac0b"
    };
    


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

}