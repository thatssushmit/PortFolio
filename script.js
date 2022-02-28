 // slide-up script
scrollupbtn = document.getElementById("scroll-up-btn");
navBarSelector = document.getElementById("navbar")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(this.scrollY > 50){
        navBarSelector.classList.add("sticky")
    }
    else{
        navBarSelector.classList.remove("sticky")
    }
    if (this.scrollY > 500) {
        scrollupbtn.classList.add("show")
        // scrollupbtn.addClass("show")

    } else {
        scrollupbtn.classList.remove("show")
        // scrollupbtn.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// function showMenu(){
//    let  menuSelectors = document.getElementById("menu")

//     // document.getElementById("navbar").classList.T
//     menuSelectors.classList.toggle("active")
//     document.getElementById("menu-btn1").childNodes[1].classList.toggle("active")
//     document.getElementById("navbar").classList.toggle("active")
//     let itemMenu = menuSelectors.children
//     for(let menus in itemMenu){
//         let menu = itemMenu[menus].children.
    

//     }


    

    // console.log(menuButton)
    // document.getElementsByClassName("navbar .menu").classList.toggle("active")
    // document.getElementsByClassName(".menu-btn i").classList.toggle("active")

// }

// a.addEventListener('click', e => {
//     debugger
//     e.currentTarget; // always returns "a" element
//     e.target; // may return "a" or "span"
// })






stringsArrays = ["Programmer","Web-Designer","Freelancer","Web-Developer"]
typingHomeSelector = document.getElementsByClassName("typing")


window.onload = function() {
    var typed = new Typed(".typing", {
        strings: stringsArrays,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: stringsArrays,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

}


$(document).ready(function(){
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script


});

