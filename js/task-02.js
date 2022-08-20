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
let  mainList = [];
       ingredients.map(function (el) {
          let listIngEl = document.createElement("li");
          listIngEl.classList.add("item");
          listIngEl.textContent = el;
          mainList.push(listIngEl);
                    return ;
        
        });
        // console.log(mainList);
        list.append(...mainList);
        