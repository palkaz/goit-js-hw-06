// const NumOfCatEl = document.querySelectorAll("h2");
// console.log("Number of categories:", NumOfCatEl.length);
// let numCatEl = NumOfCatEl.length;
// console.log("");
// // --------------------------------------
// NumOfCatEl.forEach(function (number, index) {
//   // console.log("Category:", number.textContent);

//   const navItemNumEl = document.querySelectorAll("li.item");
//   console.log("Category:", navItemNumEl[index].children[0].textContent);
//   console.log("Elements:", navItemNumEl[index].children[1].children.length);
//   console.log("");
// });
// вар2
const ulEl = document.querySelectorAll(".item");
const numberOfulEl = ulEl.length;
console.log(`Number of categories: ${numberOfulEl}`);

const mainUl = ulEl.forEach(el =>{
   console.log(`Category: ${el.firstElementChild.textContent}`);
   console.log(`Element: ${el.lastElementChild.children.length}`);
});
