const numbers = document.querySelectorAll(".js-display");
const input = document.querySelector(".js-input");
const clear = document.querySelector(".js-clear");
const result = document.querySelector(".js-result");
const history = document.querySelector(".js-history");
const clearBtn = document.querySelector(".js-clearBtn");

const historyArray = [];
const resultArray = [];

let index = 0;

const addToHistory = () => {
  const newDiv = document.createElement("div");
  history.appendChild(newDiv);
  newDiv.classList.add("action");
  newDiv.classList.add("historyElem");

  newDiv.innerHTML = `${index + 1} action was: <br>
   ${historyArray[index]} = ${resultArray[index]}`;

  index++;
};

const calculate = () => {
  historyArray.push(input.value);

  if (input.value === "") {
    return;
  } else {
    input.value = eval(input.value);
    resultArray.push(input.value);
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

clearBtn.addEventListener("click", function () {
  index = 0;
  historyArray.length = 0;
  resultArray.length = 0;
  history.innerHTML = "";
  input.value = "";

  console.log(historyArray);
});
