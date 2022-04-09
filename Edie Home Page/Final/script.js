//for menu bars
const menuBars = document.querySelector("#navbar-menu");
const navLinks = document.querySelector("#nav-links");

menuBars.addEventListener("click",()=>{
     navLinks.classList.toggle("show");
     // menuBars.classList.toggle("active");
})
