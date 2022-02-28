var gender = "";
var def = "";
var userName = prompt("Enter Your Name");
var userGender = prompt("Enter Your Gender");
var userAge = prompt("Enter Your Age");

if (userGender === "Male" || userGender === "Female") {
    gender = userGender;
    if (gender == "Female") {
        def = "Ms.";
    }
    else if (gender == "Male") {
        def = "Mr.";
    }
}
else {
    alert("Gender Will Be Only ('Male' Or 'Femal') Please Rewrite It");
    userGender = prompt("Enter Your Gender");
}

var age = Number(userAge);
if (age <= 0) {
    alert("*Warning, Your Age Is Equal Or Less Than Zero");
}
var conText = "Do You Want To Skip Wellcoming Message"
var con = confirm(conText);

switch (con) {
    case true:
        alert("You Skiped Welcoming Message.");
        break;

    case false:
        alert(`Welcome ${def} ${userName}`);
        break;

    default:
        alert("Welcome To Our Website");
}