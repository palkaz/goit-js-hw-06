const NumOfCatEl = document.querySelectorAll("h2");
console.log("Number of categories:", NumOfCatEl.length);
let numCatEl = NumOfCatEl.length;
console.log("");
// --------------------------------------
NumOfCatEl.forEach(function (number, index) {
  console.log("Category:", number.textContent);
  const navItemNumEl = document.querySelectorAll("li.item");
  console.log("Elements:", navItemNumEl[index].children[1].children.length);
  console.log("");
});
