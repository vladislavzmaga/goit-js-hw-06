const elementsEl = document.querySelector("#categories");

const categoryAndElementsEl = (ulElements) => {
  console.log(`Number of categories: ${ulElements.children.length}`);
  const childEl = ulElements.children;
  for (const oneChildEl of childEl) {
    console.log(`Category: ${oneChildEl.firstElementChild.textContent}`);
    console.log(`Elements: ${oneChildEl.lastElementChild.children.length}`);
  }
};

categoryAndElementsEl(elementsEl);
