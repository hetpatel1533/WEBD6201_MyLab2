/*
 * Name: Het Patel
 * Student ID: 100849572
 * Course Code: WEBD6201-06
 */

console.log("JS script wired up");

// Global variable
let noErrors;

// Make a function to validate the fields
function validateField(id,value) {
    if((id == 'exampleInputUserFirstName') && value.length <= 1)
    {
        
    }
    else if((id == "exampleInputUserLastName") && value.length <= 1)
    {

    }
    else if(id="exampleInputUserEmail1")
    {
             
    }
    else if(id="exampleInputUserPassword1")
    {

    }
    else if(id="exampleInputUserConfirmPassword1")
    {
        
    }
}

// First Name Validation
$('#exampleInputUserFirstName').on('input', function()
{
    if( $(this).val().length <= 1)
    {
        // processing to give the error messages
        $("#errorMessage").show();
        $('#errorMessage').text("First Name should be minimum 2 characters required ");
        $("#register-button").attr("disabled", true);
        $("#register-button" ).addClass( "disabled-btn" );
    }
    else
    {
        $("#register-button").removeAttr("disabled");
        $("#register-button").removeClass( "disabled-btn");
        $("#errorMessage").hide();
    }
});

//last Name Validation
$('#exampleInputUserLastName').on('input', function()
{
    if( $(this).val().length <= 1)
    {
        // processing to give the error messages
        $("#errorMessage").show();
        $('#errorMessage').text("Last Name should be minimum 2 characters required ");
        $("#register-button").attr("disabled", true);
        $("#register-button" ).addClass( "disabled-btn" );
    }
    else
    {
        $("#register-button").removeAttr("disabled");
        $("#register-button").removeClass( "disabled-btn"); 
        $("#errorMessage").hide();
    }
});

// Email Validation 
$('#exampleInputUserEmail1').on('input', function()
{
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])/;

    if( $(this).val().length >= 8)
    {
        // processing to give the error messages
          $("#errorMessage").hide();
          if(mailformat.test($(this).val()))
          {
             $("#errorMessage").hide();
             $('#errorMessage').text(" ");    
          }
          else
          {
             $("#errorMessage").show();
             $('#errorMessage').text("Invalid email address. Please try agin.");   
          }    
    }  
    else
    {
        $("#errorMessage").show();
        $('#errorMessage').text("Email should be minimum 8 characters required ");
    }    
});

// Password Validation
$('#exampleInputUserPassword1').on('input', function()
{
    // processing to give the error messages
    if( $(this).val().length <= 6)
    {
      $("#errorMessage").show();
      $('#errorMessage').text("Password should be minimum 6 characters required ");
      $("#register-button").attr("disabled", true);
      $("#register-button" ).addClass( "disabled-btn" );
    }
    else
    {
      $("#register-button").removeAttr("disabled");
      $("#register-button").removeClass( "disabled-btn");
      $("#errorMessage").hide();
    }
});

// confirm password Validation    
$('#exampleInputUserConfirmPassword1').on('input', function()
{
    if( $(this).val() != $('#exampleInputUserPassword1').val() )
    {
        // processing to give the error messages
      $("#errorMessage").show();
      $('#errorMessage').text("Confirm Passwords did not match");
      $("#register-button").attr("disabled", true);
      $("#register-button" ).addClass( "disabled-btn" );
    }
    else
    {
      $("#register-button").removeAttr("disabled");
      $("#register-button").removeClass( "disabled-btn");
      $("#errorMessage").hide();
    }
});

//Submit Button Validation Listener
$('#register-button').click(function(event)
{
    // Show the output to console log.
    let user = new User($('#exampleInputUserFirstName').val(),$('#exampleInputUserLastName').val(),$('#exampleInputUserEmail1').val(),$('exampleInputUserPassword1').val());
    console.log(user.exampleInputUserFirstName)
    console.log(user.exampleInputUserLastName)
    console.log(user.exampleInputUserEmail1)
    console.log(user.exampleInputUserPassword1)

    // Clear the form after succesful registration
    event.preventDefault();

    //Redirect to login page
    setTimeout(function () 
    {
        window.location.href = "login.html";
    }, 3000)
});