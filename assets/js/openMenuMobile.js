const menu = document.querySelector(".menu")
const optionsLinks = document.querySelectorAll(".options-link");
const menuUser = document.querySelector(".menu-user")
const userLogin = document.querySelector(".user-login");


export default function openMenuMobile() {
    menu.classList.add("menu-mobile");
    optionsLinks.forEach(link => {
        link.classList.add("options-link--mobile");
    }); 
    menuUser.classList.add("menu-user--mobile");
    userLogin.classList.add("user-login--mobile");
}
