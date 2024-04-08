function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let bodyVal = document.querySelector('body');
let changeColorBtn = document.getElementsByClassName("change-color")[0];
let colorText = document.getElementsByClassName("color")[0];

changeColorBtn.addEventListener("click", changeColor);

function changeColor() { 
    let randomColor = getRandomHexColor();
    colorText.textContent = randomColor;
    bodyVal.style.backgroundColor = randomColor;
}