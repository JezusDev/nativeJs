"use strict";

if (localStorage.getItem("user")) {
  location.href = "lk.html";
}

const signInBtns = document.querySelectorAll(".sign-in");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close");
const formSubmit = document.querySelector(".sign-in-form__submit");
const form = document.querySelector("form");
const contacts = document.querySelectorAll(".contacts");

contacts.forEach((contact) => {
  contact.addEventListener("click", (e) => {
    e.preventDefault();
    new Toast({
      title: false,
      text: "Войдите в систему",
      theme: "warning",
      autohide: true,
      interval: 2000,
    });
  });
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = getFormData(form);
  if (!validateForm(data)) {
    return;
  }
  const req = await fetch("users.json").then((data) => data.json());
  const users = req.users;
  const user = compareUsers(data, users);
  if (user) {
    goToLk(user);
  } else {
    new Toast({
      title: false,
      text: "Такого пользователя нет",
      theme: "danger",
      autohide: true,
      interval: 2000,
    });
  }
});

signInBtns.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("modal")) {
    closeModal();
  }
});

document.documentElement.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
});

function openModal() {
  modal.classList.remove("hide");
  modal.classList.add("modal-active");
  document.documentElement.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("modal-active");
  setTimeout(() => {
    modal.classList.add("hide");
  }, 500);
  document.documentElement.style.overflow = "";
}

function getFormData(form) {
  const formData = new FormData(form);
  const obj = Object.fromEntries(formData.entries());
  return obj;
}

function compareUsers(data, users) {
  console.log(data, users);
  for (let i = 0; i < users.length; i++) {
    if (data.login === users[i].login && data.password === users[i].password) {
      return users[i];
    }
  }
  return false;
}

function goToLk(user) {
  localStorage.setItem("user", JSON.stringify(user));
  location.href = "lk.html";
}

function validateForm(data) {
  if (data.password.length < 8) {
    new Toast({
      title: false,
      text: "Слишком короткий пароль",
      theme: "danger",
      autohide: true,
      interval: 2000,
    });
    return false;
  }
  if (
    data.login.match(/^(?=.*[!@#$%^&(),.+=/\/\]\[{}?><":;|])/g) ||
    data.password.match(/^(?=.*[!@#$%^&(),.+=/\/\]\[{}?><":;|])/g)
  ) {
    new Toast({
      title: false,
      text: "Вы ввели запрещенные символы",
      theme: "danger",
      autohide: true,
      interval: 2000,
    });
    return false;
  }
  return true;
}
