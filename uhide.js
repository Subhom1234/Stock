function validateLogin() {
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("password").value;
var authority_access = document.getElementById("authority").value;
  var deviceInfo1 = document.getElementById("deviceInfo").value;
  
  var errorMessage = document.getElementById("error-msg");

  // Check the provided username and password
  
  
  
  // Normal User Access
  
 if (usernameInput === "SSM" && passwordInput === "Alpha1") {
      errorMessage.textContent = ""; // Clear any previous error message
      //google sheet send data
      
      {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyD1uWz5aIHlUWzIT3bJGlXZ2yNyWwXkF7xi_i8Usp39KBeWZRBzkz0e7KrILSqMic/exec'

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
    
    // Authority Access 
    //Access anywhere 
    
    else if (usernameInput === "subhomkole5@gmail.com_SSM" && authority_access === "Alpha1_Subhom_Kole_16102005"&& passwordInput === passwordInput) {
      errorMessage.textContent = ""; // Clear any previous error message
      //google sheet send data
      
      {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyD1uWz5aIHlUWzIT3bJGlXZ2yNyWwXkF7xi_i8Usp39KBeWZRBzkz0e7KrILSqMic/exec'

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
    
    // device info access 
    
     // Access through device info
        
        
    else if (deviceInfo1 === " Mozilla/5.0 (Linux; Android 12; CPH2127 Build/RKQ1.211119.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.6312.99 Mobile Safari/537.36") {
      errorMessage.textContent = ""; // Clear any previous error message
      //google sheet send data
      
      {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyD1uWz5aIHlUWzIT3bJGlXZ2yNyWwXkF7xi_i8Usp39KBeWZRBzkz0e7KrILSqMic/exec'

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
    // high security password 
    // Access through device info, password, username 
    
    else if (usernameInput === "subhomkole5@gmail.com_SSM"&& passwordInput === "Alpha1" && deviceInfo1 === " Mozilla/5.0 (Linux; Android 12; CPH2127 Build/RKQ1.211119.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.6312.99 Mobile Safari/537.36") {
      errorMessage.textContent = ""; // Clear any previous error message
      //google sheet send data
      
      {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyD1uWz5aIHlUWzIT3bJGlXZ2yNyWwXkF7xi_i8Usp39KBeWZRBzkz0e7KrILSqMic/exec'

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
    
    
  var deviceInfo = document.getElementById('deviceInfo');
  var userAgent = navigator.userAgent;

  // Example device verification logic
  if (userAgent.includes("Chrome")) {
    deviceInfo.textContent = ` ${userAgent}`;
    deviceInfo.style.color = 'green';
  } else {
    deviceInfo.textContent = `Device verification failed: ${userAgent}`;
    deviceInfo.style.color = 'red';
  }

    
