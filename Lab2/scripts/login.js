/*
 * Name: Het Patel
 * Student ID: 100849572
 * Course Code: WEBD6201-06
 */

// Login functionality
function showLogin(loginform)
{
  // Giving the background color
  document.body.style.backgroundColor = "#49A4B0";

  if(loginform.exampleInputUserName.value && loginform.exampleInputPassword1.value)
  {
    // Predicting the variables
    let UserName = document.getElementById('exampleInputUserName').value;
    let Password = document.getElementById('exampleInputPassword1').value;

    // processing to write the username in the page
    document.write('<html><body><h1><center>')
    document.write("Welcome" + " ");
    document.write(UserName);
    document.write('</center></h1></body></html>');
    
  }
  else
  {
    // showing an incorrect values error
    alert("Please enter your username and password.");
  }
}