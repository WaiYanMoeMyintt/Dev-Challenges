const menuItems = document.querySelector(".navbar-links");
const menuBars =document.querySelector(".humburger");

menuBars.addEventListener("click",()=>{
     menuItems.classList.toggle("active");
     menuBars.classList.toggle("active");
})
