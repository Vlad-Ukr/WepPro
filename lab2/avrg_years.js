  function countAverageYears(){
const surnameInputs = document.getElementsByName("surname");
const hireDateInputs = document.getElementsByName("hireDate");
let totalYears = 0;
let numEmployees = 0;
for (let i = 0; i < hireDateInputs.length; i++) {
  const hireDate = new Date(hireDateInputs[i].value); 
  const yearsOnJob = new Date().getFullYear() - hireDate.getFullYear(); 
  totalYears += yearsOnJob; 
  numEmployees++; 
}
const avgYears = Math.round(totalYears / numEmployees);
const resultElement = document.getElementById("result");
resultElement.innerHTML = `Average years: ${avgYears}`;
	  ;}