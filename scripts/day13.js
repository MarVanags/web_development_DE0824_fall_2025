console.log("Day 13 - Javascript Arrays, DOM Input Events");

let fruits = ["Apple", "Banana", "Cherry"];

console.log("Number of fruits: " + fruits.length);
console.log(fruits[0]);

fruits.push("Date");
console.log("After adding Date, Number of fruits: " + fruits.length);

console.log("Last fruit is: " + fruits[fruits.length - 1]);

fruits.unshift("Elderberry");

console.log("After adding Elderberry, Number of fruits: " + fruits.length);

console.log("Last fruit is: " + fruits[fruits.length - 1]);

console.log("Fruits in the array (using for loop): ");
for (let i = 0; i < fruits.length; i++) {
    console.log("Index " + i + ": " + fruits[i]);
}

console.log("Fruits in the array (using forEach): ");
fruits.forEach(fruit => console.log(fruit));

console.log("Fruits in the array (using for... of loop): ");

for (const fruit of fruits) {
    console.log(fruit);
}

const lastFruit = fruits.pop();
console.log("Popped last fruit: " + lastFruit);
console.log("Fruits after popping last item: ");
fruits.forEach(fruit => console.log(fruit));

function addFruitToList(domId, fruit) {
    const listElement = document.getElementById(domId);
    if (listElement) {
        const listItem = document.createElement("li");
        listItem.textContent = fruit;
        listElement.appendChild(listItem);
    }
    else {
        console.log("List element with ID " + domId + " not found.");
    }
}

// fruits.forEach(fruit => addFruitToList("fruits_list", fruit));

for (let i = 0; i < fruits.length; i++) {
    const listElement = document.getElementById("fruits_list");
    if (listElement) {
        const listItem = document.createElement("li");
        listItem.textContent = fruits[i];
        if (i % 2 === 0) {
            listItem.classList.add("even");
        }
        else {
            listItem.classList.add("odd");
        }
        listElement.appendChild(listItem);
    }
    else {
       console.log("List element with ID fruits_list not found."); 
    }
}

function addFruit(item, fruitArray, domId) {
    fruitArray.push(item);
    console.log("Added new fruit: " + item);
    const listElement = document.getElementById(domId);
    if (listElement) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        if ((fruitArray.length - 1) % 2 === 0) {
            listItem.classList.add("even");
        } else {
            listItem.classList.add("odd");
        }
        listElement.appendChild(listItem);
    } else {
        console.log("List element with ID " + domId + " not found.");
    }
}

const itemInput = document.getElementById("item_input");
if (itemInput) {
    itemInput.addEventListener("keydown", function(event) {
        if (event.key === "enter") {
            const newItem = itemInput.value.trim();
            itemInput.value = "";
            if (newItem !== "") {
                addFruit(newItem, fruits, "fruits_list");
            }

        };

    });
}

const addItemButton = document.getElementById("add_item_button");
if (addItemButton) {
    addItemButton.addEventListener("click", function() {
        const newItem = itemInput.value.trim();
        itemInput.value = "";
        if (newItem !== "") {
            addFruit(newItem, fruits, "fruits_list");
        }
    });
}

const deleteLastButton = document.getElementById("delete_last_button");
if (deleteLastButton) {
    deleteLastButton.addEventListener("click", function() {
        if (fruits.length > 0) {
            const removedItem = fruits.pop();
            console.log("Removed last fruit: " + removedItem);
            const listElement = document.getElementById("fruits_list");
            if (listElement && listElement.lastChild) {
                listElement.removeChild(listElement.lastChild);
            } 
            else {
                console.log("No items to remove from the list in DOM.");
            }
        } 
        else {
            console.log("No fruits to remove.");
        }
    });
}


const clearEverythingButton = document.getElementById("clear_everything");
if (clearEverythingButton) {
    clearEverythingButton.addEventListener("click", function() {
        fruits = [];
        console.log("Cleared all fruits.");
        const listElement = document.getElementById("fruits_list");
        if (listElement) {
            while (listElement.firstChild) {
                listElement.removeChild(listElement.firstChild);
            }
        } 
        else {
            console.log("List element with ID fruits_list not found.");
        }
    });
}