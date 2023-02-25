import createUrlsLine from "./addShortUrl.js";

const inputButton = document.querySelector(".input-btn");
const input = document.querySelector(".input-url");
const msgError = document.querySelector(".input-error");

inputButton.addEventListener("click", () => {
  if (!input.value == 0) {
    createUrlsLine();           

    input.value = "";
    msgError.innerHTML = "";
  } else {
    msgError.innerHTML = "Please add a link"
  }
});
