const modeSwitch = document.body.querySelector(".toggle-switch");
const toggle = document.body.querySelector(".toggle");
const sidebar = document.body.querySelector(".sidebar");
const navLINK = document.body.querySelector(".nav-link");
const modeText = document.body.querySelector(".mode-text");
const body = document.body.querySelector("body");
const day = document.body.querySelector(".day");

const headerTXT = document.body.querySelector(".header-txt");
modeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    day.classList.remove("bx-sun");
    day.classList.add("bx-moon");
    modeText.innerText = "Light Mode";
  } else {
    day.classList.remove("bx-moon");

    day.classList.add("bx-sun");

    modeText.innerText = "Dark Mode";
  }
});
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
navLINK.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
