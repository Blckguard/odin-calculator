const calcContainer = document.querySelector(".calculator");

const screen = document.createElement("div");
screen.classList.add("screen");
screen.textContent = "1234";
screen.style.border = "bold";

calcContainer.appendChild(screen);