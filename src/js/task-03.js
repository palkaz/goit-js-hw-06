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

// const groupEl = document.querySelector(".gallery");
// // находим элемент gallery
// const imageEl = images.map((image) => {
//   // создаем елмент
//   const itemEl = document.createElement("li");
//   // создаем элемент потомка
//   itemEl.classList.add("list");
//   // создаем элемент
//   const imgEl = document.createElement("img");
//   // присваиваем значения массива
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.width = 300;
//   // доюовляет то что создано в Дом
//   itemEl.append(imgEl);
//   return itemEl;
// });
// console.log(groupEl);
// groupEl.append(...imageEl);
// ----
// Вариант 1 через map join
const galImgEl = images
  .map(
    ({ url, alt }) =>
      `<li><img class="gallery-list" src="${url}" alt="${alt}" width = "200"/></li>`
  )
  .join("");
// console.log(galImgEl); вариант2 через reduce
// Я его плохо понял, но запишу буду разбираться в процессе
// const galImgEl = images.reduce(
//   (html, { url, alt }) => (html += `<li><img src="${url}" width=200></li>`),
//   ""
// );

const galGroupList = document.querySelector(".gallery");
galGroupList.insertAdjacentHTML("beforeend", galImgEl);
galGroupList.style.cssText =
  "list-style: none;display: flex;flex-direction: row;align-items: center;justify-content: space-around;";
console.log(galGroupList);
