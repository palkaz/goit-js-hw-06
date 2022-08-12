// находмим селектор над которым работаем
const textInput = document.querySelector("#validation-input");
// console.log(textInput.getAttribute(["data-length"])); // проверка =6
// запускаем проверку на валидность
// textInput.addEventListener("blur", (event) => {
//   //   console.log(event.currentTarget.value.length);

//   if (
//     //   если количество символов(length) верно то
//     event.currentTarget.value.length ===
//     Number(textInput.getAttribute(["data-length"]))
//   ) {
//     // затираем класс от предыдущего использования
//     textInput.classList.remove("invalid");
//     // если верно
//     textInput.classList.add("valid");
//     // textInput.style.borderColor = "#4caf50";
//     // console.log("Верно");
//   } else {
//     textInput.classList.remove("valid");
//     // если не верно
//     textInput.classList.add("invalid");
//     // textInput.style.borderColor = "#f44336";
//     // console.log("Не верно");
//   }
// });
// --------------------------------вариант2
textInput.addEventListener("focus", () => {
  // при обретении фокуса
  textInput.classList.remove("valid", "invalid");
  // затирает классы от предыдущих проверок(если они были)
});
textInput.addEventListener("blur", () => {
  const isValid = textInput.value.length === +textInput.dataset.length;
  // проверка на условие в кол-ве символов
  //  знак"+" переводит текстовое значение в числовое
  const addClass = isValid ? "valid" : "invalid";
  // тернарник; вставляет классы
  textInput.classList.add(addClass);
  // команда которая подставляет получившийся код в Дом
});
