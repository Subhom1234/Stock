function validateLogin() {
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("ipAddressInput").value;
  var authoritypasswordInput = document.getElementById("authority").value;
  
  var errorMessage = document.getElementById("error-msg");

  // Check the provided username and password
 if (usernameInput === "SUBHOM_SSKM" && authoritypasswordInput === "Alpha_Subhom_Kole16102005") {
    errorMessage.textContent = ""; // Clear any previous error message
    document.getElementById('psk-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
  } 
   else if (usernameInput === "SSM" && passwordInput === "146.196.47.136" || usernameInput === "SSM" && passwordInput === "223.191.49.56") {
      errorMessage.textContent = ""; // Clear any previous error message
      document.getElementById('psk-page').style.display = 'none';
      document.getElementById('main-page').style.display = 'block';
    }
  else {
    errorMessage.textContent = "Invalid username or password.";
  }
}
{
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw7elEk9mmqAL0fxXxPqXv9ItbCcPy5lUfDN2WHUIKByMtiDBr0pEun5XtIlbCbPlVV/exec'

  const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {success.innerHTML="Data Successfully Submitted";
        setTimeout(function(){
          success.innerHTML="";},5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
}
{
  function Logout(){
    location.reload()
  }
}
{
      
          // Fetch the IP address using ipify API
          fetch('https://api.ipify.org?format=json')
              .then(response => response.json())
              .then(data => {
                  // Update the input field value with the fetched IP address
                  document.getElementById('ipAddressInput').value = data.ip;
              })
              .catch(error => {
                  console.error('Error fetching IP address:', error);
                  document.getElementById('ipAddressInput').value = 'Error fetching IP address';
              });
     

    }
