function show() {
     var navbtn = document.getElementById("navbar");
     var navbutton = document.getElementById("nav-btn");
     var closebtn = document.getElementById("close");

     if(navbtn.classList.contains("navbarcon")){
         navbtn.classList.remove("navbarcon");
         closebtn.style.display="block";
         
     }
     else{
        navbtn.classList.add("navbarcon");
     }
}