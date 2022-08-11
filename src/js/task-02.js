const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const listIngEl = document.createElement("li");
ingredients.forEach(function (el) {
  const listIngEl = document.createElement("li");
  listIngEl.textContent = el;
  list.append(listIngEl);
  listIngEl.classList.add("item");
  console.log(el);
  // console.log(index);
});
