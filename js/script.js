const burger = document.querySelector(".burger_menu");
const menu = document.querySelector(".burger_menu_container");
const menu_close = document.querySelector(".close");
const body = document.body;

burger.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.classList.toggle("open");
    body.classList.toggle("menu-open");
    body.classList.toggle("no-scroll");
});

menu_close.addEventListener("click", () => {
    menu.classList.remove("open");
    body.classList.remove("menu-open");
    body.classList.remove("no-scroll");
});

// Закрытие при клике вне меню
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        menu.classList.remove("open");
        body.classList.remove("menu-open");
        body.classList.remove("no-scroll");
    }
});
