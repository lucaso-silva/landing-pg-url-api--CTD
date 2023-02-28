// const input = document.querySelector(".input-url");

export default function createUrlsLine(longUrlValue, shortUrlValue) {
    const urlList = document.querySelector(".urls-list");
    // const inputValue = input.value;
    
    const urlLine = document.createElement("li");
    urlLine.classList.add("url-line");

    const longUrl = document.createElement("a");
    longUrl.classList.add("long-url");
    longUrl.setAttribute("href", longUrlValue)
    longUrl.innerHTML = longUrlValue;

    const shortUrl = document.createElement("a");
    shortUrl.classList.add("shrt-url");
    shortUrl.setAttribute("href", shortUrlValue)
    shortUrl.innerHTML = shortUrlValue;

    const lineButton = document.createElement("button");
    lineButton.classList.add("btn-retng");
    lineButton.classList.add("btn-copy");
    lineButton.innerHTML = "Copy";

    urlLine.appendChild(longUrl);
    urlLine.appendChild(shortUrl);
    urlLine.appendChild(lineButton);


    urlList.appendChild(urlLine);

    console.log(urlList);
}