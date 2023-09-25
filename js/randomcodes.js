// Define the function to generate an 8-character code
function generateCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 1; i <= 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  }
  
  // Function to disable the form submit button
  function disableButton(btnvalue) {
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.setAttribute("disabled", "true");}
    if(btnvalue= true) {
    document.getElementById("submit").style.backgroundColor ="rgba(73,119,209,0.3";
    document.getElementById("submit").style.color = "rgba(255,255,255,0.5)";
  } else {
    document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,1)";
    document.getElementById("submit").style.color = "rgba(255,255,255,1)";
  }
  var codebox= document.getElementById("codeentered");
  codebox.addEventListener("input", evaluateCode);
  function evaluateCode() {
    getCode = document.getElementById("codeentered").value;
    var charset1= getCode.trim();
    var charset2 = code.trim();
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
  }
  // Add an event listener when the DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener for form submission
    document.querySelector("form").addEventListener("submit", function (event) {
      // Prevent the form from submitting
      event.preventDefault();
  
      // Get the user's entered verification code
      const userCode = document.getElementById("verificationCode").value;
  
      // Generate the verification code
      const generatedCode = generateCode(); // Call the function
  
      // Compare the user's code with the generated code
      if (userCode === generatedCode) {
        // Code is correct, you can submit the form or perform other actions
        alert("Verification successful! Form can be submitted.");
      } else {
        // Code is incorrect, show an error message to the user
        alert("Invalid verification code. Please try again.");
      }
  
      // Disable the form submit button
      disableButton();
    });
  });
  