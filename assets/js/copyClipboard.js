export default function copyClipboard() {
    const linkToCopy = document.querySelector(".shrt-url");
    
    navigator.clipboard.writeText(linkToCopy.textContent);
};