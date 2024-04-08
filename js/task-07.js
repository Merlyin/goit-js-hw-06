let scrollBar = document.getElementById('font-size-control');
let textToUpdate = document.getElementById('text');

scrollBar.addEventListener("input", fontUpdate);
function fontUpdate() {
    textToUpdate.style.fontSize = scrollBar.value + "px";
}