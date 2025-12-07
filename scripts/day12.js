console.log("Day 12 - Functions, DOM Elements");

console.log("Functions are reusable blocks of code that perform a specific task.");
console.log("They can take inputs (parameters) and return outputs (return values).");

function greet(name) {
    return "Hello, " + name + "!";
}

const greetingForAlice = greet(Alice);
console.log(greetingForAlice);

const greetingForBob = greet(Bob);
console.log(greetingForBob);

const greetingForCharlie = greet(Charlie);
console.log(greetingForCharlie);

function printGreet(name) {
    console.log("Hi there, " + name + "!");
}

printGreet("Diana");

const result = printGreet("Eve");
console.log("Result of printGreet function is: " + result);

function sayHelloWorld() {
    console.log("Hello, World!");
}

sayHelloWorld();

function addNumbers(a, b) {
    return a + b;
}
const sum = addNumbers(5, 10);
console.log("Sum of 5 and 10 is: " + sum);

function addTextToElement(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent += text;
    } else {
        console.log("Element with ID " + elementId + " not found.");
    }
}

function replaceTextInElement(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
    } else {
        console.log("Element with ID " + elementId + " not found.");
    }
}

replaceTextInElement("function_example_div", "This text created using a function! ");

addTextToElement("function_example_div", "Here is some more text added via the same function. ");

function addListItem(listId, itemText) {
    const listElement = document.getElementById(listId); 
    if (listElement) {
        const listItem = document.createElement("li"); 
        listItem.textContent = itemText; 
        listElement.appendChild(listItem);
    } else {
        console.log("List element with ID " + listId + " not found.");
    }   
}

addListItem("function_ul", "Fruits");
addListItem("function_ul", "Vegetables");
addListItem("function_ul", "Grains");

const healthyFoods = ["Nuts", "Seeds", "Legumes", "Lean Proteins"];

healthyFoods.forEach(food => addListItem("function_ul", food));

const moreHealthyFoods = ["Fish", "Whole Grains", "Mushrooms"];
for (let i = 0; i < moreHealthyFoods.length; i++) {
    console.log(`Adding more healthy food index ${i}: ` + moreHealthyFoods[i]);
    addListItem("function_ul", moreHealthyFoods[i]);
}

const firstName = "Frank";
const age = 30;
console.log(`My name is ${firstName} and I am ${age} years old.`);

function handleButtonClick() {
    console.log("Button was clicked!");
    const eventOutputDiv = document.getElementById("eventOutput");
    // eventOutputDiv.innerHTML += "<p>Button was clicked! Event handled by handleButtonClick function.</p>";
    // const newParagraph = document.createElement("p");
    // newParagraph.textContent = "Button was clicked! Event handled by handleButtonClick function.";
    // eventOutputDiv.appendChild(newParagraph);
    addListItem("button_list", "Button was clicked and handled!");
    
}

document.getElementById("eventButton").addEventListener("click", handleButtonClick);

let buttonClickCount = 0;
function handleCountedButtonClick() {
    buttonClickCount++;
    console.log("Counted Button was clicked! Total clicks: " + buttonClickCount);
    const eventOutputDiv = document.getElementById("event_counter");
    eventOutputDiv.innerText = `Button clicked ${buttonClickCount} times.`;
}

document.getElementById("eventButton").addEventListener("click", handleCountedButtonClick);

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
function changeBackgroundColor() {
    const red = random(255);
    const green = random(255);
    const blue = random(255);
    const bgColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = bgColor;
    console.log("Background color changed to: " + bgColor);
}

document.getElementById("change_color").addEventListener("click", changeBackgroundColor);