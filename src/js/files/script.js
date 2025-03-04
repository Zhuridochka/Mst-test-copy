// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const isTouchScreen = window.matchMedia("(any-hover:none)").matches;

window.addEventListener("load", windowLoaded);

function windowLoaded() {
  let documentActions = (e) => {
    const targetElement = e.target;
    const typeEvent = e.type;
    const targetTag = targetElement.tagName;
  };

  //* Функція для визначення висоти у header
  function updateHeightHeader() {
    const header = document.querySelector(".header");
    if (!header) return;
    const headerHeight = header.offsetHeight;
    console.log(headerHeight);

    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }

  //* Єдиний слухач події зміни розміру в'юпорту
  window.addEventListener("resize", function handleResize() {
    updateHeightHeader();
  });

  document.addEventListener("click", documentActions);
}
