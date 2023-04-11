// const header= document.querySelector("header");
// window.addEventListener ("scroll", function(){
//     header.classList.toggle( " sticky" , window.scrollY > 100);
// });


const spans =document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
span.style.width= span.dataset.width;
span.innerHTMl = span.dataset.width;
});

let  menu = document.querySelector('.menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=> {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}