console.log("Login task in JS");
// Saved in DB 
let email = "usmannadeem015@gmail.com";
let password = "beyblade";

// User input
let user_email = prompt("Enter your email")
let user_password = prompt("Enter your password")

// Validation 
if (
    email==user_email
    &&
    password==user_password
) {
    alert("Logged in")
    location.assign("../variables.html")
}

else {
    alert("Incorrect email or password")
}