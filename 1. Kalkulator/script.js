const numbers = document.querySelectorAll(".js-display");
const input = document.querySelector(".js-input");
const dot = document.querySelector(".js-dot");
const clear = document.querySelector(".js-clear");
const result = document.querySelector(".js-result");

clear.addEventListener("click", function () {
  input.value = "";
});

const calculate = (x, y, o) => {
  input.value = eval(input.value);
};

result.addEventListener("click", calculate);

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    const value = number.textContent;
    input.value += value;
  });
});
