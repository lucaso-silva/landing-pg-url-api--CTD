# Shortly Landing Page - shortening URL API --CTD


https://user-images.githubusercontent.com/97140968/222015943-47c11c4f-bd52-4c4b-8861-8f77fa4cfdd6.mp4


### See in the [link](https://lucaso-silva.github.io/landing-pg-url-api--CTD/)

## Overview
Landing page integrated with the [shrtcode API](https://shrtco.de/)

This is my 4th CTD Project, and it was chosen looking-for improve my skills in front-end development using HTML, CSS, and JavaScript.

It was developed based in a model from [frontendmentor](https://www.frontendmentor.io).  

> Status: Concluded
- Deadline: 28/02/23 ✅
---
### Objectives
Users should be able to:
- View the optimal layout for the site depending on their device's screen size ✅
- Shorten any valid URL ✅
- See a list of their shortened links, even after refreshing the browser ⚠️
- Copy the shortened link to their clipboard in a single click ✅
- Receive an error message when the form is submitted if:
  - The input field is empty ✅

## Built with
- Semantic HTML5 markup
- Mobile-first workflow
- CSS custom properties
- Flexbox
- JavaScript

## What I learned 💡
Through the development of this project, I had the opportunity to fortify and improve my knowledge mainly about CSS and JavaScript.
Integrating the Landing Page with a third API was the major learning and one of the main difficulties in this project, to deal with this, I had to learn about programming using the concept of asynchronous functions.
```JavaScript
inputButton.addEventListener("click", async function () {
      const input = document.querySelector(".input-url");
      const inputValue = input.value;
  
      const result = await fetch(`${API_URL}/shorten?url=${inputValue}`);
      const apiResult = await result.json();
      
      const longUrlValue = apiResult.result.original_link;
      const shortUrlValue = apiResult.result.short_link;
```
To copy the shortened link to the clipboard I learned about the JavaScript method `navigator.clipboard`
```JavaScript
export default function copyClipboard(index) {
    const allSrtLinks = document.querySelectorAll(".shrt-url");

    navigator.clipboard.writeText(allSrtLinks[index].textContent);        
};
```
Looking for copying the correct shortened link, associated with the corresponding COPY button, I learned that is possible to pass the index of the element clicked in the `forEach()` method.
```JavaScript
btnsCopy.forEach((btn, index) => {
        btn.addEventListener("click", ()=> {
          
          copyClipboard(index);
          btn.classList.add("copied");
          btn.innerHTML = "Copied.."

          setTimeout(()=> {
            btn.classList.remove("copied");
            btn.innerHTML = "Copy";
          }, 3000)
        });
      })
```

### 🛠️ Continued development
The next step will be focused on the following:
- Save the list of shortened links, even after refreshing the browser
- Delete any line from the list of saved links

---
👨🏻‍💻 Developed by Lucas Oliveira
