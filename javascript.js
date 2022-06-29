const firstname=document.querySelector('#first-name');
const lastname=document.querySelector('#last-name');
const email=document.querySelector('#email');
const phone=document.querySelector('#phone-number');
const password=document.querySelector('#user-password');
const cpassword=document.querySelector('#confirm-password');

const firstnameError=document.querySelector('#first-name-error');
const lastnameError=document.querySelector('#last-name-error');
const emailError=document.querySelector('#email-error');
const phoneError=document.querySelector('#phone-error');
const passwordError=document.querySelector('#password-error');
const cpasswordError=document.querySelector('#confirm-password-error');

const button=document.querySelector('button');

let phoneRegex=/\d{10}/;
let passwordRegex=/(?=.*[A-Z])(?=.*\d).{8,}/;



button.addEventListener('click',function(e){
    if (firstname.value==""){
        firstnameError.textContent="Type your first name";
    }else{
        firstnameError.textContent="";
    }
    if (lastname.value==""){
        lastnameError.textContent="Type your last name";
    }else{
        lastnameError.textContent="";
    }
    if (email.validity.typeMismatch){
        emailError.textContent="Type a valid email";
    }else if (email.value==""){
        emailError.textContent="Type a valid email";
    }
    else{
        emailError.textContent="";
    }
    if (phoneRegex.test(phone.value)==false){
        phoneError.textContent="Type a 10 digit number";
    }else{
        phoneError.textContent="";
    }
    if (passwordRegex.test(password.value)==false){
        passwordError.textContent="At least 8 characters, 1 cap. letter and 1 number";
    }else{
        passwordError.textContent="";
    }
    if (cpassword.value!==password.value){
        cpasswordError.textContent="Must type the same password";
    }else{
        cpasswordError.textContent="";
    }
});

