console.log("Up and running");

const getInput = () => {
  let value = document.getElementById("primeInput").value;

  let result = eval(value);

  let div = document.createElement("DIV");

  div.style.width = "100%";
  div.innerHTML = `${value} = ${result}`;
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.fontFamily = "var(--main-text-font)";
  div.style.width = "100%";
  div.style.height = "50px";
  div.style.border = "1px solid black";
  document.getElementById("calculatingHistory").appendChild(div);
};

let calculate = document.getElementById("calculate");

calculate.addEventListener("click", getInput);

const numberClick = (value) => {
  document.getElementById("primeInput").value += value;
  console.log(value);
};

function keyCode(event) {
  var x = event.keyCode;
  if (x == 13) {
    getInput();
  }
}
