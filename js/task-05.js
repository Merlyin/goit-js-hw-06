let nameVal = document.getElementById('name-input');
let userName = document.getElementById('name-output');
nameVal.addEventListener("input", updateName);
function updateName() {
    if(nameVal.value !== '') {
        userName.textContent = nameVal.value; 
    } else {
        userName.textContent = "Anonymous";
    }
}