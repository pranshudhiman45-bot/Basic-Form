let userName = document.querySelector('#name');
let userEmail = document.querySelector('#email');
let userPassword = document.querySelector('#password');


function formSubmission(){
    if ( userName.value == "Pranshu Dhiman" && userEmail.value == "pranshudhiman45@gmail.com" && userPassword.value == "1234567"){
            alert("Your form is submitted")
    }
    else{
        alert("Please enter the correct information")
    }
    return

};
