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
  
  var database = firebase.database();

  var name = "";
  var dob = "";
  var username = "";
  var email = "";
  var bio = "";
  var interest = "";
  var skills = "";

  $("#submit-profile").on("click", function(event) {
    event.preventDefault();

    name = $("#name-input").val().trim();
    dob = $("#dob-input").val().trim();
    username = $("#username-input").val().trim();
    email = $("#email-input").val().trim();
    bio = $("#bio-input").val().trim();
    interest = $("#interests-input").val().trim();
    skills = $("#skills-input").val().trim();

    console.log(name)
    console.log(dob)
    console.log(username)
    console.log(email)
    console.log(bio)
    console.log(interest)
    console.log(skills)

    database.ref().push({
      Name: name,
      DOB: dob,
      UserName: username,
      Email: email,
      Bio: bio,
      Interests: interest,
      Skills: skills,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    window.location.href = "https://kiaramorel1.github.io/virtual-help/assessment/assessment.html";

  });

   // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
   database.ref().on("child_added", function(childSnapshot) {

    console.log(childSnapshot.val().Name);
    console.log(childSnapshot.val().DOB);
    console.log(childSnapshot.val().UserName);
    console.log(childSnapshot.val().Email);
    console.log(childSnapshot.val().Bio);
    console.log(childSnapshot.val().Interests);
    console.log(childSnapshot.val().Skills);
    console.log(childSnapshot.val().dateAdded);

    $('#skills-display').text(childSnapshot.val().Skills);
    $('#interests-display').text(childSnapshot.val().Interests);
    $('#bio-display').text(childSnapshot.val().Bio);
    $('#username-display').text(childSnapshot.val().UserName);
    $('#email-display').text(childSnapshot.val().Email);
    $('#name-display').text(childSnapshot.val().Name);
    $('#dob-display').text(childSnapshot.val().DOB);
    // $("#employee-list").append("<tr><td class='name-display'> " +
    //   childSnapshot.val().Name +
    //   " </td><td class='role-display'> " + childSnapshot.val().Role +
    //   " </td><td class='date-display'> " + childSnapshot.val().StartDate +
    //   " </td><td class='rate-display'> " + childSnapshot.val().MonthlyRate +
    //   " </td></tr>");

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

//   dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
//     // Change the HTML to reflect
//     $("#name-display").text(snapshot.val().name);
//     $("#email-display").text(snapshot.val().email);
//     $("#age-display").text(snapshot.val().age);
//     $("#comment-display").text(snapshot.val().comment);
//   });
console.log(localStorage.user);

if (localStorage.user){
    console.log(localStorage.user);
}

// $('#email-input).val(localStorage.email)
// $('#userimage).attr("src", localStorage.photo)
// // $("#username").text(localStorage.name);
// $("#email-display").text(localStorage.email);

