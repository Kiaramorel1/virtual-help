var firebaseConfig = {
    // your keys here
    apiKey: "AIzaSyCyK0o3xcA2ufZfSq90ytJnQ_udRMC_tfM",
    authDomain: "user-authentication-9fc60.firebaseapp.com",
    databaseURL: "https://user-authentication-9fc60.firebaseio.com",
    projectId: "user-authentication-9fc60",
    storageBucket: "user-authentication-9fc60.appspot.com",
    messagingSenderId: "903367526321",
    appId: "1:903367526321:web:a518c7466774f9a4941f90"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// service reference
var auth = firebase.auth()


var emailText = $('#exampleInputEmail1');
var passText = $('#exampleInputPassword1');
var formSubmit = $('#submitBtn');
var loginSubmit = $('#loginBtn');

// registering user
formSubmit.on('click', function(){
    event.preventDefault();
    var email = emailText.val();
    var password = passText.val();
    console.log('LOL');
    auth.createUserWithEmailAndPassword(email, password);
    formSubmit.hide();
    loginSubmit.hide();
});

// login users
loginSubmit.on('click', function(){
    var email = emailText.val();
    var password = passText.val();
    auth.signInWithEmailAndPassword(email, password)
    formSubmit.hide();
    loginSubmit.hide();
});

// logout user
$('#logoutBtn').on('click', function(){
    auth.signOut();
    $('#logoutBtn').hide();
    formSubmit.show();
    loginSubmit.show();
});

auth.onAuthStateChanged(function(user){
    if(user){
        console.log(user);
    }else {
        console.log("You need to sign in or create an account");
    }
});