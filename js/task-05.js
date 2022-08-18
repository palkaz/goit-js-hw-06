// находим элементы
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
// добавляем слушателя
inputName.addEventListener("input", (event) => {
  // тернарник
  outputName.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymos";
});
