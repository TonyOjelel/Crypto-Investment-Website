function validateForm() {
    // Get the values of the form fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
  
    // Check if the username is at least 4 characters long
    if (username.length < 4) {
      alert("Error: The username must be at least 4 characters long.");
      return false;
    }
  
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      alert("Error: The password must be at least 8 characters long.");
      return false;
    }
  
    // Check if the email address is valid
    if (!validateEmail(email)) {
      alert("Error: The email address is not valid.");
      return false;
    }
  
    // If all checks pass, return true to submit the form
    return true;
  }
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  