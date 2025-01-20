import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";


const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");




submit.addEventListener('click' , event =>{
    event.preventDefault()

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    
  })
    .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);

    window.location = "logIn.html"
    
  });

    // console.log(fullName.value);
    console.log(email.value);
    console.log(password.value);

    // window.location = "login.html"

    var nameVal = fullName.value
    var emailValue = email.value
    var passwordVal = password.value
    
    
    const fullN = localStorage.setItem("fullName" , nameVal);
    const stringFull = JSON.stringify(fullN)

    const emailVal = localStorage.setItem("emailValue" , emailValue);
    const stringEmail = JSON.stringify(emailVal)

    const passVal = localStorage.setItem("passValue" , passwordVal);
    const stringpass = JSON.stringify(passVal)
})

