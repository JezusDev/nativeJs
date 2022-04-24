"use strict";

const title = document.querySelector(".main__title");
const localSettings = JSON.parse(localStorage.getItem("user"));
const outBtns = document.querySelectorAll(".logout");

title.innerHTML = `Привет, ${localSettings.name}`;

outBtns.forEach((btn) => {
  btn.addEventListener("click", logout);
});

function logout() {
  localStorage.clear();
  location.href = "main.html";
}
