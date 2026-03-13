//document.querySelector("#app").innerHTML = `hello world`;

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthResult = document.querySelector("#length-result");
const convertBtn = document.querySelector("#convert-btn");
const inputNumber = document.querySelector("#input-number");
const volumeResult = document.querySelector("#volume-result");
const massResult = document.querySelector("#mass-result");

convertBtn.addEventListener("click", () => {
  lengthResult.innerHTML = `${inputNumber.value} meters = ${inputNumber.value * 3.281} feet | ${inputNumber.value} feet = ${(inputNumber.value / 3.282).toFixed(3)} meters`;
  volumeResult.innerHTML = `${inputNumber.value} liters = ${(inputNumber.value * 0.264).toFixed(3)} gallons | ${inputNumber.value} gallons = ${(inputNumber.value / 0.264).toFixed(3)} liters`;
  massResult.innerHTML = `${inputNumber.value}  kilos = ${(inputNumber.value * 2.204).toFixed(3)}  pounds | ${inputNumber.value}  pounds = ${(inputNumber.value / 2.204).toFixed(3)} kilos`;
  console.log(typeof (inputNumber.value * 3.281));
});
