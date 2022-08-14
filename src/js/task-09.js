function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// первые 4 строчки это генератор случайных чисел
// находим селекторы нужные для работы
const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const outputText = document.querySelector(".color");

const changeBodyColor = (event) => {
  event.preventDefault();
  let newColor = getRandomHexColor();
  // console.log(newColor);
  // создаем стиль и вставляем значение в селектор цвета
  body.style.backgroundColor = newColor;
  // console.log(newColor);
  // тоже; только вставляем значение текстом
  outputText.textContent = newColor;
  // console.log(document.body.style.backgroundColor);
};
// вешаем слушателя на кнопку
changeColorBtn.addEventListener("click", changeBodyColor);
