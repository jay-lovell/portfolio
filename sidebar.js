window.addEventListener("click", function(e){
  if (!document.getElementById('sidenav').contains(e.target) && (!document.getElementById('nav-icon').contains(e.target))){
  closeNav();
   ; //the same code you've used to hide the menu
} 
})

function openNav() {
    document.getElementById("sidenav").style.width = "20vw";
    setTimeout(closeNav, 5000);
  }
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
  }

