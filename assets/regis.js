var config = {
    apiKey: "AIzaSyAW6hMIb20NrEQQYFFhvZIuPWQVDEbG0jU",
    authDomain: "virtual-help-b832e.firebaseapp.com",
    databaseURL: "https://virtual-help-b832e.firebaseio.com",
    projectId: "virtual-help-b832e",
    storageBucket: "virtual-help-b832e.appspot.com",
    messagingSenderId: "981848357630",
    appId: "1:981848357630:web:52fd690620c2131ba983af",
    measurementId: "G-QY5YDL3MDM"
  };

firebase.initializeApp(config);
// Google provider object
var provider = new firebase.auth.GoogleAuthProvider();

// Variables
var auth = firebase.auth();
var signOut = $('#logout')
var teachSignIn = $('#google-sign-in-teacher')
var studSignIn = $('#google-sign-in-student')


// Teacher Sign In Function
function teacherSignIn() {
    base_provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(base_provider).then(function(result) {
        var token = result.credential.accessToken;
        console.log(token);
        var user = result.user
        console.log(user)
        var uid = user.uid
        var displayName = user.displayName
        var email = user.email
        console.log(email)
        var photo = user.photoURL
        console.log("You are now logged in")
    }).catch(function(err) {
        console.log(err)
        console.log("sorry try again")
    })
}


// Student Sign In Function
function studentSignIn() {
    base_provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(base_provider).then(function(result) {
        var user = result.user
        console.log(user)
        var displayName = user.displayName
        var email = user.email
        console.log(email)
        var photo = user.photoURL
        console.log("You are now logged in")
        localStorage.name = displayName
        localStorage.email = email
        localStorage.photo = photo


        window.location.href = "./createprofile/studentprofile.html"
        // populateProfile(email, displayName, photo )
    }).catch(function(err) {
        console.log(err)
        console.log("sorry try again")
    })
}

// On click sign out
signOut.on('click', function(e) {
    console.log("You now logged out")
    e.preventDefault();
    auth.signout();
})
// Login on click
teachSignIn.on('click', function() {
    teacherSignIn();
})
studSignIn.on('click', function() {
    studentSignIn();
})
// Auth State Changed
auth.onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
        console.log(firebaseUser);
        signOut.show();
    } else {
        console.log("not logged in");
        signOut.hide()
    }
})







