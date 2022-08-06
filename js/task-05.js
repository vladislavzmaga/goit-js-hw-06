const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const startName = outputEl.textContent;
inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value
    ? (outputEl.textContent = event.currentTarget.value)
    : (outputEl.textContent = startName);
}
