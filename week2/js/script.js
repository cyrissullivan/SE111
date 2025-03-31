var message = prompt("What is your name?");
//alert(message + " Wouldn't You Like to Be a Pepper Too?"); 
document.getElementById("Welcome-message").innerHTML = `Welcome ${message} to Week 2 Lab! `;
document.getElementById("footer").style.color = "purple";