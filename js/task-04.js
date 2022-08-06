const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

let valueContent = 0;

const addIncrementValue = () => {
  valueContent += 1;
  counterValue.textContent = valueContent;
};

const addDecrementValue = () => {
  valueContent -= 1;
  counterValue.textContent = valueContent;
};

incrementBtn.addEventListener("click", addIncrementValue);
decrementBtn.addEventListener("click", addDecrementValue);
