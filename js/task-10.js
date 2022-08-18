function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// функция для случайного цвета через RGB
// function getRandomRgbColor() {
//   const red = Math.round(Math.random(0, 1) * 255);
//   const green = Math.round(Math.random(0, 1) * 255);
//   const blue = Math.round(Math.random(0, 1) * 255);
//   return `rgb(${red}, ${green}, ${blue})`;
// }

const ref = {
  inputValue: document.querySelector("#controls>input"),
  btnGreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxListHTML: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  const boxWrap = [];
  amount = ref.inputValue.value;
  for (let i = 0; i < amount; i += 1) {
    const boxSize = 30;
    let growBox = boxSize + i * 10;
    const boxItem = `<div style ='width:${growBox}px ;height:${growBox}px; background-color:${getRandomHexColor()}'></div>`;
    boxWrap.push(boxItem);
  }
  ref.boxListHTML.insertAdjacentHTML("afterbegin", boxWrap.join(""));
};
// console.log(ref.boxWrap);
const destroyBoxes = () => {
  ref.boxListHTML.innerHTML = "";
  ref.inputValue.value = "";
};

ref.btnGreate.addEventListener("click", createBoxes);
ref.btnDestroy.addEventListener("click", destroyBoxes);
