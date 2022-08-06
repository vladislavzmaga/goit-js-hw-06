const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.querySelector("#ingredients");

// const getArray = (masiveEl) => {
//   for (const element of masiveEl) {
//     const itemEl = document.createElement("li");
//     itemEl.classList.add("item");
//     itemEl.textContent = element;
//     ulElement.append(itemEl);
//   }
//   return ulElement;
// };

const getArray = (masiveEl) => {
  masiveEl.forEach((element) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = element;
    ulElement.append(itemEl);
  });
  return ulElement;
};
console.log(getArray(ingredients));
