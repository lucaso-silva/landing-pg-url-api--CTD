const input = document.querySelector(".input-url");


export default function createUrlsLine() {
    const urlList = document.querySelector(".urls-list");
    
    const urlLine = document.createElement("li");
    urlLine.classList.add("url-line");

    const longUrl = document.createElement("a");
    longUrl.classList.add("long-url");
    longUrl.innerHTML = input.value;

    const shortUrl = document.createElement("a");
    shortUrl.classList.add("shrt-url");
    shortUrl.innerHTML = "ex1shortHTML";

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