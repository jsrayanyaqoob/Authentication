const div = document.querySelector(".signUpBtn")

const userName = localStorage.getItem("fullName");
console.log(userName);


div.innerHTML = `
    <p class="fullWelcome">Welcome,<span class="userName"> &nbsp;${userName}</span></p>
`