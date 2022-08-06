const refs = {
  email: document.getElementsByName("email"),
  password: document.getElementsByName("password"),
  btn: document.querySelector("button"),
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  if (mail === "" || password === "") {
    alert("Все поля должны быть заполнены!!!");
  } else {
    const formData = {
      mail,
      password,
    };

    console.log(formData);
    refs.form.reset();
  }
}
