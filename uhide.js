function validateLogin() {
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("password").value;
var authority_access = document.getElementById("authority").value;
  
  
  var errorMessage = document.getElementById("error-msg");

  // Check the provided username and password
 if (usernameInput === "SSM" && passwordInput === "Alpha1") {
      errorMessage.textContent = ""; // Clear any previous error message
      //google sheet send data
      
      {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwJAyrM3LBRvGt0m5d4qeaSxkOLAQxFlhe_CPVDOtzlMfZcWkMUvZm74kVo3yTcGkvSKw/exec'

  const form = document.forms['submit-to-google-sheet1']
const success = document.getElementById('success')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {success.innerHTML="Data Successfully Submitted";
        
      })
      .catch(error => console.error('Error!', error.message))
  })
}
      
      
      
      //unhide 
      document.getElementById('psk-page').style.display = 'none';
      document.getElementById('main-page').style.display = 'block';
    }
    else if (usernameInput === "subhomkole5@gmail.com_SSM" && authority_access === "Alpha1_Subhom_Kole_16102005"&& passwordInput === passwordInput) {
      errorMessage.textContent = ""; // Clear any previous error message
      //google sheet send data
      
      {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwJAyrM3LBRvGt0m5d4qeaSxkOLAQxFlhe_CPVDOtzlMfZcWkMUvZm74kVo3yTcGkvSKw/exec'

  const form = document.forms['submit-to-google-sheet1']
const success = document.getElementById('success')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {success.innerHTML="Data Successfully Submitted";
        
      })
      .catch(error => console.error('Error!', error.message))
  })
}
      
      
      
      //unhide 
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
    //Device Data
    
    
  const deviceInfo = document.getElementById('deviceInfo');
  const userAgent = navigator.userAgent;

  // Example device verification logic
  if (userAgent.includes("Chrome")) {
    deviceInfo.textContent = ` ${userAgent}`;
    deviceInfo.style.color = 'green';
  } else {
    deviceInfo.textContent = `Device verification failed: ${userAgent}`;
    deviceInfo.style.color = 'red';
  }

    
