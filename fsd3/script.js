document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent default form submission

    // Get values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value.trim();

    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("mobileError").innerText = "";

    var isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name must not be empty";
        isValid = false;
    }

    // Email validation (basic regex)
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    // Mobile validation
    if (isNaN(mobile) || mobile.length !== 10) {
        document.getElementById("mobileError").innerText = "Enter valid 10-digit mobile number";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }

});
