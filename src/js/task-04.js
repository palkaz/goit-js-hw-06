let counterValue = 0;
const buttonDeccrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");
// вешаем слушателя
buttonDeccrement.addEventListener("click", () => {
  counterValue -= 1;
  //   console.log(counterValue);
  spanValue.textContent = counterValue;
});
// вешаем слушателя
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  //   console.log(counterValue);
  spanValue.textContent = counterValue;
});
