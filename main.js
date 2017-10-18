let num = document.getElementsByClassName("number");
let op = document.getElementsByClassName("operators");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let decimal = document.getElementById("decimal");
let display = document.getElementById("display");

clear.addEventListener("click", function remove() {
  display.innerHTML = "";
});

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function numbers() {
      display.innerHTML += num[i].innerHTML;
    });
}

for (let i = 0; i < op.length; i++) {
  op[i].addEventListener("click", function operate() {
    display.innerHTML += ` ${op[i].innerHTML} `;
  });
}

decimal.addEventListener("click", function deci() {
  display.innerHTML += decimal.innerHTML;
});

equal.addEventListener("click", function equate() {
  let eq = display.innerHTML.split(" ");
  let result = 0;
  if (eq[1] === "/") {
    result = parseFloat(eq[0]) / parseFloat(eq[2]);
  } else if (eq[1] === "x") {
    result = parseFloat(eq[0]) * parseFloat(eq[2]);
  } else if (eq[1] === "-") {
    result = parseFloat(eq[0]) - parseFloat(eq[2]);
  } else if (eq[1] === "+") {
    result = parseFloat(eq[0]) + parseFloat(eq[2]);
  }
  display.innerHTML = parseFloat(result.toFixed(4));
});
