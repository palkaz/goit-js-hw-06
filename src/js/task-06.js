// находмим селектор над которым работаем
const textInput = document.querySelector("#validation-input");
// console.log(textInput.getAttribute(["data-length"])); // проверка =6
// запускаем проверку на валидность
textInput.addEventListener("blur", (event) => {
  //   console.log(event.currentTarget.value.length);
  //   console.log(Number(textInput.getAttribute("data-lehgth")));
  if (
    //   если количество символов(length) верно то
    event.currentTarget.value.length ===
    Number(textInput.getAttribute(["data-length"]))
  ) {
    // затираем класс от предыдущего использования
    textInput.classList.remove("invalid");
    // если верно
    textInput.classList.add("valid");
    // textInput.style.borderColor = "#4caf50";
    // console.log("Верно");
  } else {
    textInput.classList.remove("valid");
    // если не верно
    textInput.classList.add("invalid");
    // textInput.style.borderColor = "#f44336";
    // console.log("Не верно");
  }
});
