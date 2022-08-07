const buttonEl = document.querySelector(".change-color");
const parEl = document.querySelector(".color");

buttonEl.addEventListener("click", getColodBody);

function getColodBody() {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  parEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
