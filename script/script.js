
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");


const activemenu = () => {
  const menu_center = document.querySelector(".menu_center")
    menu_center.className("active");
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  activemenu();
});

document.querySelector("#close_side").onclick = () => {
  menu.classList.remove("active");
};