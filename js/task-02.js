const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
// вар1
// const listIngEl = document.createElement("li");
// ingredients.forEach(function (el) {
//   const listIngEl = document.createElement("li");
//   listIngEl.textContent = el;
//   list.append(listIngEl);
//   listIngEl.classList.add("item");
//   console.log(el);
//   // console.log(index);
// });
// вар2 через шаблон
// const listIngEl =ingredients.map(
//     ingredient =>
//       `<li class="item">${ingredient}</li>`)
//       .join("");
// list.insertAdjacentHTML("beforeend", listIngEl);
// вар3 через распыление

 const listIngEl =ingredients.map(
      ingredient =>
      document.createElement("li")
  .listIngEl.textContent(ingredient)
      .listIngEl.classList.add("item")
      )
        .join("");
       list.append(...listIngEl); 
