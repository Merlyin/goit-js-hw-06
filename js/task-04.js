const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    currentValue: document.getElementById('value')
};

let counterValue = 0;
refs.decrementBtn.addEventListener("click", decreaseVal);
refs.incrementBtn.addEventListener("click", increaseVal);

function decreaseVal() { 
    counterValue -= 1;
    refs.currentValue.innerText = counterValue;
}
function increaseVal() {
    counterValue += 1;
    refs.currentValue.innerText = counterValue;
}