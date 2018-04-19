$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApeW4hk1YyonVZzksplNbFsZo9kjZG0TQ",
    authDomain: "mezar-f1cde.firebaseapp.com",
    databaseURL: "https://mezar-f1cde.firebaseio.com",
    projectId: "mezar-f1cde",
    storageBucket: "mezar-f1cde.appspot.com",
    messagingSenderId: "535166958101"
  };
  firebase.initializeApp(config);

    $("#login_btn").click(function(){

        var email = $("#posta").val();
        var password = $("#parola").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(){
                window.location.href = "homepage.html";
            }).catch(function(error){
                alert(error.message);
        })


    })

})