alert("Welcome to Toy Planet! Please login to continue.");
const loginBtn = document.getElementById("btn");          
const usernameInput = document.getElementsByName("username")[0];  
const passwordInput = document.getElementsByName("password")[0];  
const forgotLink = document.querySelector(".forgot");     

loginBtn.addEventListener("click", function() {
    if(usernameInput.value === "" || passwordInput.value === "") {
        
        alert("Please fill in both username and password.");
        console.log("Login attempt failed: empty fields");
    } else {
        
        alert("Login successful! Welcome, " + usernameInput.value);
        console.log("Login successful for user:", usernameInput.value);
    }
});

forgotLink.addEventListener("click", function(e) {
    e.preventDefault(); 
    alert("Password recovery link has been sent to your registered email.");
    console.log("Forgot Password link clicked");
});
console.log("Login page loaded successfully");
