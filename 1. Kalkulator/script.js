const numbers = document.querySelectorAll(".js-display");
const input = document.querySelector(".js-input");
const dot = document.querySelector(".js-dot");
const clear = document.querySelector(".js-clear");
const result = document.querySelector(".js-result");
const history = document.querySelector(".js-history");

const newDiv = document.createElement("div");
const historyDiv = document.querySelector(".js-action");

const inputValue = input.value;

const addToHistory = () => {
  const historyArray = [];

  history.appendChild(newDiv);
  newDiv.classList.add("action");

  // input.value.push(historyArray);
  console.log(historyArray);
};

const calculate = () => {
  if (input.value === "") {
    return;
  } else {
    input.value = eval(input.value);
    addToHistory();
  }
};

clear.addEventListener("click", function () {
  input.value = "";
});

result.addEventListener("click", calculate);

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    const value = number.textContent;
    input.value += value;
  });
});
