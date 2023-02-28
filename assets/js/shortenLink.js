const API_URL = "https://api.shrtco.de/v2";

export default async function shortenLink(inputValue) {

    const result = await fetch(`${API_URL}/shorten?url=${inputValue}`);
    const apiResult = await result.json();
      
    const longUrlValue = apiResult.result.original_link;
    const shortUrlValue = apiResult.result.short_link;
}