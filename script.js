//? 1. grab the elements we need
const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const buttons = document.querySelector(".buttons");

//? 2. add event listeners to the buttons
//? long way
// add.addEventListener("click", () => {
//   count.innerHTML++;
// });

// sub.addEventListener("click", () => {
//   count.innerHTML--;
// });

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });

//? Better way with event delegation
//! note this did not work on icons inside the buttons..
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "white";
  }
}
