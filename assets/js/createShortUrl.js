const input = document.querySelector(".input-url");

const API_URL = "https://api.shrtco.de/v2"

export default async function createShortUrl() {
    const inputValue = input.value;

    const result = await fetch(`${API_URL}/shorten?url=${inputValue}`);
    const shortedResult = await result.json();

    const shortUrlValue = shortedResult.result.short_link
    console.log(shortUrlValue);
}