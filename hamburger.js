const menu = document.querySelector(".nav-links");
const menuBTN = document.querySelector(".nav-toggle");

menuBTN.addEventListener("click", () => {
  const visibility = menu.getAttribute("data-visible");
  if(visibility === "false") {
    menu.setAttribute("data-visible", true);
    menuBTN.innerHTML = "close";
  } else {
    menu.setAttribute("data-visible", false);
    menuBTN.innerHTML = "menu";
  }
  
})