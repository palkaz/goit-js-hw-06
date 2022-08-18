// находим елемент с которым работаем
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // отменяем действие по умолчанию
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  //   if (email.value === "" || password.value === "") {
  //     return console.log("Заполните все поля!");
  //   }
  // проверка заполнения формы
  if (email.value === "") {
    return console.log("Заполните поле Email!");
  }
  if (password.value === "") {
    return console.log("Заполните поле Password!");
  }
  const dataFofm = { email: `${email.value}`, password: `${password.value}` };
  console.log(dataFofm);

  // отчистка формы
  event.currentTarget.reset();
}
