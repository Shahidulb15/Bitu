

// const boxDiv = document.querySelector (".box");

// boxDiv.addEventListener("click", () =>{
//     console.log ();
// });


// const box = document.querySelector("#box");

// box.classList.add("transparent")
// box.classList.remove("rounded")
// box.classList.toggle ('active', 1 === 1)
// box.classList.replace ("transparent", "filled")

// console.log(box.classList.contains("filled"))





// const hamburger = document.querySelector(".hamburger");
// const mainNav = document.querySelector(".navbar");

// hamburger.addEventListener("click",() => {
//     hamburger.classList.toggle("active");
//     mainNav.classList.toggle("active");
// })

// const b2 = document.querySelectorAll(".navbar li a")
// b2.forEach(n => n.addEventListener("click",() =>{
//     hamburger.classList.remove("active");
//     mainNav.classList.remove("active");
// }))




// let darkmode = localStorage.getItem("darkmode")
// const themeSwitch = document.querySelector(".theme-switch")

// const enableDarkmode = () => {
//     document.body.classList.add("darkmode")
//     localStorage.setItem("darkmode", "active");
// }
// const disableDarkmode = () => {
//     document.body.classList.remove("darkmode")
//     localStorage.setItem("darkmode", "inactive");
// }

// if (darkmode === "active") enableDarkmode()

// themeSwitch.addEventListener("click", () => {
//     darkmode = localStorage.setItem("darkmode")
//     darkmode !== "active" ? enableDarkmode() : disableDarkmode()
// })



let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.querySelector(".theme-switch");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", "inactive"); 
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode"); 
    if (darkmode !== "active") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});



    // const m2 = document.querySelector(".java")
    // const b2 = document.querySelector(".javascript-dropdown")
    
    // b2.addEventListener("mouseover", () => {
    //     b2.classList.toggle("active")
    //     m2.classList.toggle("active")
    // })