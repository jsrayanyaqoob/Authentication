const div = document.querySelector(".signUpBtn")
const userName = localStorage.getItem("fullName");

alert(`Welcome, ${userName}`)

div.innerHTML = `
    <button id="logoutBtn">Logout</button>
`




import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    
  } else {
    window.location = "logIn.html"
  }
});


import {signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const logout = document.querySelector("#logoutBtn");
logout.addEventListener("click" , event =>{
    event.preventDefault()

    signOut(auth).then(() => {
        window.location = "logIn.html"
    }).catch((error) => {
 
    });
})