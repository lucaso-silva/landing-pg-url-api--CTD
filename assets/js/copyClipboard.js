export default function copyClipboard(index) {
    const allSrtLinks = document.querySelectorAll(".shrt-url");

    navigator.clipboard.writeText(allSrtLinks[index].textContent);        
};