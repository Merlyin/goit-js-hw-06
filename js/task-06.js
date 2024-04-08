let validationVal = document.getElementById('validation-input');
let dataLength = document.querySelector("[data-length]");

validationVal.addEventListener("blur", updateBorder);

function updateBorder() {
    if(validationVal.value.length == dataLength.dataset.length) {
        validationVal.className = "valid";
    } else {
        validationVal.className = "invalid";
    }
}