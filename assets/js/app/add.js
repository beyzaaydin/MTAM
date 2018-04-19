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

    var current_user="";    

firebase.auth().onAuthStateChanged(function(user){
if(user){
    current_user = user.uid;
   

   
    $(".sendToFirebase").click(function(){

        var  name1 = $("#name1").val();
    firebase.database().ref().child("user").child(current_user).child(name).push(
    {
    name1 : name,
complated : false
    }
);
$("name1").val('');
    })
}



})
})

   