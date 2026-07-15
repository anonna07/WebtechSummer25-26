document.getElementById("home").style.display = "block";

var hour = new Date().getHours();
var greetText = "";

if (hour < 12) {
  greetText = "Good Morning!";
} else if (hour < 17) {
  greetText = "Good Afternoon!";
} else {
  greetText = "Good Evening!";
}
document.getElementById("greeting").innerHTML = greetText;


function toggleTheme() 
{ document.body.classList.toggle("dark"); }

function showSection(id) {
  document.getElementById("home").style.display = "none";
  document.getElementById("about me").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById(id).style.display = "block";
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var valid = true;

  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";
  document.getElementById("successMsg").innerHTML = "";

  if (name == "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    valid = false;
  }

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    document.getElementById("emailError").innerHTML = "Enter a valid email";
    valid = false;}

  if (message.length < 10) {
    document.getElementById("messageError").innerHTML = "Message must be at least 10 characters";
    valid = false;}

  if (valid == true) {
    document.getElementById("successMsg").innerHTML = "Message sent successfully!";}
  return false;
}