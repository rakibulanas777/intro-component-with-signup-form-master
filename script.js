const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    document.getElementById("error_firstname").style.display = "block";
    document.getElementById("error_lastname").style.display = "block";
    document.getElementById("email_error").style.display = "block";
    document.getElementById("password_error").style.display = "block";
    setTimeout(() => {
      document.getElementById("error_firstname").style.display = "none";
      document.getElementById("error_lastname").style.display = "none";
      document.getElementById("email_error").style.display = "none";
      document.getElementById("password_error").style.display = "none";
    }, 5000);
  }
});
