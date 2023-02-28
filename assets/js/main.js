import openMenuMobile from "./openMenuMobile.js";
import closeMenuMobile from "./closeMenuMobile.js";
import createUrlsLine from "./createUrlsLines.js";
import copyClipboard from "./copyClipboard.js";

const btnHamburger = document.querySelector(".img-menu");
const inputButton = document.querySelector(".input-btn");
const msgError = document.querySelector(".input-error");
let isMenuOpen = false;

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
      const apiResult = await result.json();
      
      const longUrlValue = apiResult.result.original_link;
      const shortUrlValue = apiResult.result.short_link;
      
      createUrlsLine(longUrlValue, shortUrlValue);
      
      input.value = ""

      const btnsCopy = document.querySelectorAll(".btn-copy");
      console.log(btnsCopy);

      btnsCopy.forEach(btn => {
        btn.addEventListener("click", copyClipboard);
      })
  }
    
  //   msgError.innerHTML = "";
  // } else {
  //   msgError.innerHTML = "Please add a link"
  // }
);