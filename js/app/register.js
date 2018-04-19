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

    firebase.initializeApp(config);


    $("#register_btn").click(function(){

        var email = $("#eposta").val();
        var password = $("#sifre").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function(){
                        window.location.href = "homepage.html";
                    })

            }).catch(function(error){
                alert(error.message);
        })

    })


})