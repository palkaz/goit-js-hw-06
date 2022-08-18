// находим нужные атрибуты для работы
const inFontSize = document.querySelector("#font-size-control");
const outFontSize = document.querySelector("#text");
// создаем класс для работы с стилями кавычки должны быть только такими!
outFontSize.classList.add(`input-style`);
inFontSize.addEventListener("input", (element) => {
  // получаем значение от инпута
  const valInput = element.target.value;
  // передаем его в размер текста
  outFontSize.style.fontSize = `${valInput}px`;
  //   console.log(valInput);
  return outFontSize.style.fontSize;
});
