const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open"); 
  //  menu.classList.contains("menu--open") ? TweenMax.fromTo(".menu--open", 2, {x:-350}, {x:0}) : TweenMax.fromTo(menu, 2, {x:0}, {x:-350}); 
  menu.classList.contains("menu--open") ? TweenMax.fromTo(menu, 1, {x:0}, {x:350}) : TweenMax.fromTo(".menu", 1, {x:350}, {x:0});
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// TweenMax.to(target, duration, {vars});
// ex. TweenMax.to(".logo"(selects class or can pass in a DOM element, can also pass in jQuery selector 
// or array of objects), 2(2 seconds), {vars}(select CSS properties));
