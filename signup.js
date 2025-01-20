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





import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const google = document.querySelector("#googleLogIn")

google.addEventListener('click' , event =>{
  event.preventDefault()

  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    
   
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

  });
})





// import { signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const Facebookprovider = new FacebookAuthProvider();

const facebook = document.querySelector("#facebookLogIn")

facebook.addEventListener('click' , event =>{
  event.preventDefault()

  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
  });
})
