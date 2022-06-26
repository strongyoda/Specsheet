const toggleBtn = document.querySelector(".button");
const menu = document.querySelector(".specsheetmenu");
const icons = document.querySelector(".logo");

toggleBtn.addEventListener("click", () => {
menu.classList.toggle("active");
icons.classList.toggle("active");
});
