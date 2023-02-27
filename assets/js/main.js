import openMenuMobile from "./openMenuMobile.js";
import closeMenuMobile from "./closeMenuMobile.js";
import createUrlsLine from "./createUrlsLines.js";

const btnHamburger = document.querySelector(".img-menu");
const inputButton = document.querySelector(".input-btn");
let isMenuOpen = false;
const msgError = document.querySelector(".input-error");


const API_URL = "https://api.shrtco.de/v2"


btnHamburger.addEventListener("click", () => {
  if(!isMenuOpen) {
    openMenuMobile();
    isMenuOpen = true;
  } else {
    closeMenuMobile();
    isMenuOpen = false;
  }


});


inputButton.addEventListener("click", async function () {
      const input = document.querySelector(".input-url");
      const inputValue = input.value;
  
      const result = await fetch(`${API_URL}/shorten?url=${inputValue}`);
      const shortedResult = await result.json();
  
      const shortUrlValue = shortedResult.result.short_link
      
      createUrlsLine(shortUrlValue);

      input.value = ""
  }
    
  //   msgError.innerHTML = "";
  // } else {
  //   msgError.innerHTML = "Please add a link"
  // }
);
