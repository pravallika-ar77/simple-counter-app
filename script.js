let count = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

decrementButton.addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});

resetButton.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});
