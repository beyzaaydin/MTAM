$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyDftgXeGXeW2BOuG79UBG2G8fwP7QSTyQs",
        authDomain: "morethanamenu-358e8.firebaseapp.com",
        databaseURL: "https://morethanamenu-358e8.firebaseio.com",
        projectId: "morethanamenu-358e8",
        storageBucket: "morethanamenu-358e8.appspot.com",
        messagingSenderId: "14307437642"
    };
    firebase.initializeApp(config);



    $("#loginBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(){
                window.location.href = "homepage.html";
            }).catch(function(error){
                alert(error.message);
        })


    })

})