const menu = document.querySelector("#mobile-menu");  //this is targetting the hamburger menu//
const menulinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

//Display Mobile Menu

const toggleMenu = () => {
    menu.classList.toggle("is-active");
    menulinks.classList.toggle("active");
}

menu.addEventListener("click", toggleMenu);

// This shows and highlights the menu when scrolling using the class .navbar__links:hover ** .highlight

const highlightLinks = () => {
    //const elem = document.querySelector(".navbar__links:hover");
    const elem = document.querySelector(".highlight")
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const serviceMenu = document.querySelector("#services-page");
    let scrollPos = window.scrollY

    if(window.innerWidth > 960 && scrollPos <600){
        // homeMenu.classList.add("navbar__links:hover") 
        // aboutMenu.classList.remove("navbar__links:hover")
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');

        return;
    } 
    else if (window.innerWidth > 960 && scrollPos < 1400){
        // aboutMenu.classList.add("navbar__links:hover");
        // homeMenu.classList.remove("navbar__links:hover");
        // serviceMenu.classList.remove("navbar__links:hovert");
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
        return;
    
    }
    else if (window.innerWidth > 960 && scrollPos < 2345){
        // serviceMenu.classList.add("navbar__links:hover");
        // aboutMenu.classList.remove("navbar__links:hover");
        aboutMenu.classList.remove('highlight');
        serviceMenu.classList.add('highlight');
        return;

    }
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        //elem.classList.remove("navbar__links:hover");
        elem.classList.remove('highlight');
      }
};
window.addEventListener("scroll", highlightLinks);
window.addEventListener("click", highlightLinks);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
        if (window.innerWidth <= 960 && menuBars) {
            menu.classList.toggle('is-active');
            menulinks.classList.remove('active');
        }
  };
  
  menulinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);