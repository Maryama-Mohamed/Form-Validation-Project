
const username = document.getElementById('username');

const email = document.getElementById('email');

const password = document.getElementById('password');

const confirmPassword = document.getElementById('confirmPassword');

const form = document.getElementById('form');

const showError = (input, message) => {

    let parentElement = input.parentElement;

    parentElement.classList = "form-control error" ;

    const small = parentElement.querySelector('small');

    const successIcon = document.querySelectorAll("i"[0]);
    const errorIcon = parentElement.querySelectorAll("i"[1]);

  errorIcon.style = "visibility: visible";
  successIcon.style = "visibility: hidden";

   small.innerText = message;;
}
const showSuccess = (input) => {

    let parentElement = input.parentElement;

    parentElement.classList = "form-control success";

    const successIcon = parentElement.querySelectorAll("i"[0]);
    const errorIcon = parentElement.querySelectorAll("i"[1]);

    // successIcon.style.visibility = 'visible';
    // errorIcon.style.visibility = 'hidden';

//    small.innerText = message;;
}

const checkEmpty = (element) => {

    element.forEach((element) => {
        if(element.value === ''){

            showError(element,'Input Required');
        }else{
            showSuccess(element);
        }

    });
}

const checkEmail = (email) => {

    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regular expressions

    if(reg.test(email.value)){

        showSuccess(email);
    }else{
        showError(email, 'Invalid Email ');
    }



}

const checkPasswordLength = (input, min, max) => {

    if(input.value.length < min){
        showError(input, `Password must be at least ${min}  characters`);
        }else if(input.value.length > max){
            showError(input, 'Password must be at most ' + max + ' characters long');
        }else{
            showSuccess(input);
        }

}

const checkConfirmPassword = (password,confirmPassword) => { 

    if(password.value !== confirmPassword.value){

        showError(confirmPassword,"password is not match");
        
    }
};


form.addEventListener('submit', (event) =>{

    event.preventDefault();
    
    checkEmpty( [username, email, password, confirmPassword]);

    checkEmail(email);

    checkPasswordLength(password, 6,10);

    checkConfirmPassword(password, confirmPassword);




})


