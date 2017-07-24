let num = document.getElementsByClassName("number");
let op = document.getElementsByClassName("operators");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let decimal = document.getElementById("decimal");

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
    if (op[i].innerHTML === "x") {
      display.innerHTML += " * ";
    } else {
    display.innerHTML += ` ${op[i].innerHTML} `;
    }
  });
}

decimal.addEventListener("click", function deci() {
  display.innerHTML += decimal.innerHTML;
});

equal.addEventListener("click", function equate() {
  let eq = display.innerHTML.split(" ");
  let result = 0;
  if (eq[1] === "/") {
    result = parseInt(eq[0]) / parseInt(eq[2]);
  } else if (eq[1] === "*") {
    result = parseInt(eq[0]) * parseInt(eq[2]);
  } else if (eq[1] === "-") {
    result = parseInt(eq[0]) - parseInt(eq[2]);
  } else if (eq[1] === "+") {
    result = parseInt(eq[0]) + parseInt(eq[2]);
  }
  display.innerHTML = result;
});
