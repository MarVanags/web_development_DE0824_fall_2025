
console.log("Hello, welcome to Day 9 of Web Development!");

document.getElementById("header_id").style.backgroundColor = "lightblue";
console.log("Changed background color of header_id to lightblue");

console.log("End of day9.js");


const outputElement = document.getElementById("output_id");

outputElement.textContent = "This text is added by Javascript code in day9.js file.";
console.log("Added text to output_id element");

const a = 10;
const b = 4;

const result = a + b;
outputElement.textContent += `\nThe sum of ${a} and ${b} is ${result}.`;

console.log("Added sum of a and b to output_id element");

const difference = a - b;
outputElement.textContent += `\nThe difference of ${a} and ${b} is ${difference}.`;

const multiplication = a * b;
const division = a / b;
const modulus = a % b;
const exponentiation = a ** b;

outputElement.textContent += `\nThe multiplication of ${a} and ${b} is ${multiplication}.`;
outputElement.textContent += `\nThe division of ${a} by ${b} is ${division}.`;
outputElement.textContent += `\nThe modulus of ${a} and ${b} is ${modulus}.`;
outputElement.textContent += `\nThe exponentiation of ${a} to the power of ${b} is ${exponentiation}.`;

console.log("Added all mathematical operations to output_id element");

const footerElement = document.getElementById("footer_text");
const currentDate = new Date();
footerElement.textContent += `\nCurrent date and time: ${currentDate.toString()}`;
console.log("Added current date and time to footer_text element");
