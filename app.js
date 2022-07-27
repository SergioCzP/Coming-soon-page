"use strict";

const form = document.querySelector(".form");
const label = document.querySelector(".form__label");
const input = document.getElementById("email");
const submit = document.querySelector(".form__submit");
const message = "Please provide a valid email";
let email;
let checked = false;

const mailFormat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

const isValid = function () {
  email = input.value.trim().toLowerCase();
  console.log(email);

  return email !== "" && email.match(mailFormat) !== null ? true : false;
};

const displayWarning = function () {
  if (!checked) {
    checked = true;
    label.insertAdjacentText("beforeend", message);
  }
  if (!input.classList.contains("form__input--warning")) {
    label.classList.add("form__label--warning");
    input.classList.add("form__input--warning");
  }
  return checked;
};

input.addEventListener("change", () => {
  if (input.classList.contains("form__input--warning")) {
    input.classList.remove("form__input--warning");
  }
});

form.addEventListener("submit", (e) => {
  if (isValid()) {
    form.submit();
  } else {
    console.log("No valid");
    displayWarning();
    e.preventDefault();
  }
});
