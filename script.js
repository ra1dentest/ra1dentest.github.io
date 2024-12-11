const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 

  function(menuItem) { 

    menuItem.addEventListener("click", toggleMenu);

  }

)