//document.querySelector("#app").innerHTML = `hello world`;

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthResult = document.querySelector("#length-result");
const convertBtn = document.querySelector("#convert-btn");
const inputNumber = document.querySelector("#input-number");

convertBtn.addEventListener("click", () => {
  lengthResult.innerHTML = `${inputNumber.value} meters = ${inputNumber.value * 3.281} feet | ${inputNumber.value} feet = ${(inputNumber.value / 3.282).toFixed(3)} meters`; // inputNumber.value;
  console.log(typeof (inputNumber.value * 3.281));
});
