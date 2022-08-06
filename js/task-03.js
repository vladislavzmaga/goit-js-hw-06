const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const ulElement = document.querySelector(".gallery");

// const getImg = function (array, ulElement) {
//   for (const element of array) {
//     const itemEl = document.createElement("li");
//     itemEl.classList.add("gallery__item");

//     const imgEl = document.createElement("img");
//     imgEl.classList.add("gallery__img");
//     imgEl.src = element.url;
//     imgEl.alt = element.alt;
//     imgEl.width = 480;
//     itemEl.appendChild(imgEl);
//     imgEl.style.listStyleNone;
//     ulElement.appendChild(itemEl);
//   }
//   return ulElement;
// };

// console.log(getImg(images, ulElement));

const ulElement = document.querySelector(".gallery");

const getImg = function (array, ulElement) {
  for (const element of array) {
    ulElement.insertAdjacentHTML(
      "beforeEnd",
      `<li class = "gallery__item" ><img class = "gallery__img" src="${element.url}" alt="${element.alt}" style = "width:400px; height:225px"></li>`
    );
  }
  return ulElement;
};

console.log(getImg(images, ulElement));
