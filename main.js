let num = document.getElementsByClassName("number");
let op = document.getElementsByClassName("operators");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let decimal = document.getElementById("decimal");

clear.addEventListener("click", remove);
function remove() {
  display.innerHTML = "";
}

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", numero);
    function numero() {
      display.innerHTML += num[i].innerHTML;
    }
}

for (let i = 0; i < op.length; i++) {
  op[i].addEventListener("click", operate);
  function operate() {
    if (op[i].innerHTML === "x") {
      display.innerHTML += "*";
    } else {
    display.innerHTML += op[i].innerHTML;
    }
  }
}

equal.addEventListener("click", equate);
function equate() {
  let eq = eval(display.innerHTML);
  display.innerHTML = eq;
}

decimal.addEventListener("click", deci);
function deci() {
  display.innerHTML += decimal.innerHTML;
}
