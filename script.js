document.getElementsByClassName('btn')[0].addEventListener('click',()=>{
  document.getElementsByClassName('btn')[0].innerHTML="sent";
});

const toggler= document.getElementById("toggler");
const navMenu=document.getElementById("nav-links");

toggler.addEventListener('click',()=>{
    navMenu.classList.toggle("active")
});