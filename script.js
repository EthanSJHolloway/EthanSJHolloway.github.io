let menu = document.querySelector("#header ul");
let bar = document.querySelector("#header .fa-bars");
let mainpic = document.querySelector(".hero .hero-images");

bar.addEventListener("click",function(){
    menu.classList.toggle("show");
    mainpic.classList.toggle("show");
});

