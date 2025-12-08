console.log("Day 14 - Javascript Objects, JSON, Event Target Identification");

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "swimming"],
    city: "New York"
};

console.log(person);

console.log("First Name: " + person.firstName);
console.log("Last Name: " + person["lastName"]);

person.country = "USA";
console.log("After adding country: ", person);

let key = "profession";
person[key] = "Engineer";
console.log("After adding profession: ", person);
console.log("Profession: " + person[key]);

console.log("Hobbies: " + person.hobbies);
console.log("Hobbies listed:");
for (const hobby of person.hobbies) {
    console.log("- " + hobby);
}

person.address = {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
};
console.log("After adding address: ", person);
console.log("Now we can access nested 2nd level properties:");
console.log("Street is at person.address.street: " + person.address.street);

let addrKey = "address";
let streetKey = "street";
console.log("Street using variable keys: " + person[addrKey][streetKey]);

console.log("Looping through all key-value pairs in person object:");
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

let people = [
    {
        firstName: "Alice",
        lastName: "Smith",
        age: 28
    },
    {
        firstName: "Bob",
        lastName: "Johnson", 
        age: 35
    },
    {   firstName: "Charlie",
        lastName: "Brown",
        age: 22
    }
];

console.log("Ages of people in the array:");
// people.forEach(person => console.log(person.firstName + " " + person.lastName + " is " + person.age + " years old."));
for (const person of people) {
    console.log(person.firstName + " " + person.lastName + " is " + person.age + " years old.");
}

console.log("People in tabular format:");
console.table(people);

const downloadButton = document.getElementById("download_json_button");
if (downloadButton) {
    downloadButton.addEventListener("click", () => {
        const jsonString = JSON.stringify(people, null, 2); 
        const blob = new Blob([jsonString], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        console.log("Downloading from url: " + url);
        a.download = "people.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

const eventTargetButton = document.getElementById("myButton");
const secondButton = document.getElementById("secondButton");

function onButtonClick(event) {
        console.log("Button with id " + event.target.id + " was clicked.");
        event.target.textContent = "Clicked!";

    };


if (eventTargetButton) {
    eventTargetButton.addEventListener("click", onButtonClick);
}
if (secondButton) {
    secondButton.addEventListener("click", onButtonClick);
}

//we have following elemtents in HTML:
    // <div class="input-container">
    //     <label for="car_make_input">Car Make:</label>
    //     <input type="text" id="car_make_input" placeholder="Enter car make">
    //     <label for="car_model_input">Car Model:</label>
    //     <input type="text" id="car_model_input" placeholder="Enter car model">
    //     <label for="car_year_input">Car Year:</label>
    //     <input type="number" id="car_year_input" placeholder="Enter car year">
    //     <button id="add_car_button">Add Car</button>
    //     <button id="clear_cars_button">Clear All Cars</button>
    // </div>
    // <ul id="car_list">
    // 
    // </ul>

let cars = []; 

function addCar(make, model, year, color) {
    const car = {
        make: make,
        model: model,
        year: year,
        color: color
    };
    cars.push(car);
    console.log("Added new car: ", car);
    const carList = document.getElementById("car_list");
    if (carList) {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model} (${car.year}) - Color: ${car.color}`;
        carList.appendChild(li);
        const carIndex = cars.length - 1;
        if (carIndex % 2 === 0) {
            li.classList.add("even");
            console.log("Added even class to car list item.");
        } else {
            li.classList.add("odd");
            console.log("Added odd class to car list item.");
        }
        li.addEventListener("click", () => {
            const newColor = prompt("Enter new color for the car:", car.color);
            if (newColor && newColor.trim() !== "") {
                car.color = newColor.trim(); 
                li.firstChild.textContent = `${car.make} ${car.model} (${car.year}) - Color: ${car.color}`; 
                console.log("Updated car color to: " + car.color);
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete me";
        deleteButton.style.marginLeft = "10px";
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {

            const index = cars.indexOf(car);
            if (index > -1) {
                cars.splice(index, 1);
                console.log("Deleted car: ", car);
            }
            li.remove();


            //we do not want the event to bubble up to li click event so we stop propagation
            //how do we stop propagation without event object?

            //https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
        });
    }
}

const addCarButton = document.getElementById("add_car_button");
if (addCarButton) {
    addCarButton.addEventListener("click", () => {
        const makeInput = document.getElementById("car_make_input");
        const modelInput = document.getElementById("car_model_input");
        const yearInput = document.getElementById("car_year_input");
        const colorInput = document.getElementById("car_color_input");
        const make = makeInput ? makeInput.value.trim() : "";
        const model = modelInput ? modelInput.value.trim() : "";
        const year = yearInput ? parseInt(yearInput.value) : NaN;
        const color = colorInput ? colorInput.value.trim() : "Unknown";
        addCar(make, model, year, color);
    });
}

const clearCarsButton = document.getElementById("clear_cars_button");
if (clearCarsButton) {
    clearCarsButton.addEventListener("click", () => {
        cars = []; 
        const carList = document.getElementById("car_list");
        if (carList) {
            carList.innerHTML = ""; 
            console.log("Cleared all cars.");
        }
    });
}