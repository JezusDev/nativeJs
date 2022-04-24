document.querySelector(".sign-in").addEventListener("click", logout);

function logout() {
  localStorage.clear();
  location.href = "main.html";
}
