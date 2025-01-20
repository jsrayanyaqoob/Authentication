import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");    

const verifyPass = localStorage.getItem("passValue")
const verifyEmail = localStorage.getItem("emailValue")


submit.addEventListener('click' , event =>{
    event.preventDefault()

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
    });

    console.log(email.value);
    console.log(password.value); 

    if(verifyPass === password.value && verifyEmail === email.value){
        window.location = "loggedIn.html"
    } else {
        console.error("Password in incorrect...");
    }
})

