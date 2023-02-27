
export default function closeMenuMobile() {
    const menuMobile = document.querySelector(".menu-mobile")
    const optionsLinksMobile = document.querySelectorAll(".options-link--mobile");
    const menuUserMobile = document.querySelector(".menu-user--mobile")
    const userLoginMobile = document.querySelector(".user-login--mobile");

    menuMobile.classList.remove("menu-mobile");
    optionsLinksMobile.forEach(link => {
        link.classList.remove("options-link--mobile");
    }); 
    menuUserMobile.classList.remove("menu-user--mobile");
    userLoginMobile.classList.remove("user-login--mobile");
}
