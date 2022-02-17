$(document).ready(function(){
    // $('.navbar .menu li a').click(function(){
    //     // applying again smooth scroll on menu items click
    //     $('html').css("scrollBehavior", "smooth");
    // });
    // toggle menu/navbar script
    // $('.menu-btn').click(function(){
    //     $('.navbar .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");
    // });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Web-Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Programmer","Web-Designer","Freelancer","Web-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//navbar function


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

//menu button in nsav bar 

// menuButtons = document.getElementsByClassName("menu-btn")
// for (let button in menuButtons){
//     button.
//     // button.click(function(){
//     //     document.getElementsByClassName("navbar menu").classList.toggleClass("active")
//     //     document.getElementsByClassName("menu-btn i").classList.toggleClass("active")
    
//     // })

// }

//typing oon home page


stringsArrays = ["Programmer","Web-Designer","Freelancer","Web-Developer"]
typingHomeSelector = document.getElementsByClassName("typing")


for(let txt in stringsArrays){

    let text = document.createTextNode(txt)
    typingHomeSelector.appendChild(text)

}


