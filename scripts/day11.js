console.log("Day 11 - Switch Statement, While and For Loops");

let today = new Date();
console.log("Today is: " + today.toString());
let day = today.getDay();
console.log("Numeric day of the week: " + day);

let dayMessage = "";
switch (day) {
    case 0:
        dayMessage = "Today is Sunday.";
        break;
    case 1:
        dayMessage = "Today is Monday.";
        break;
    case 2:
        dayMessage = "Today is Tuesday.";
        break;
    case 3:
        dayMessage = "Today is Wednesday.";
        break;
    case 4:
        dayMessage = "Today is Thursday.";
        break;
    case 5:
        dayMessage = "Today is Friday.";
        break;
    case 6:
        dayMessage = "Today is Saturday.";
        break;
    default:
        dayMessage = "Invalid day.";
}

document.getElementById("switch_example").textContent = dayMessage;

let customMonthMessage = "";
let month = today.getMonth(); 

let fullMonthName = today.toLocaleString('default', { month: 'long' });
console.log("Numeric month of the year: " + month);
console.log("Full month name: " + fullMonthName);

switch (fullMonthName) {
    case "January":
        customMonthMessage = "It's January!";
        break;
    case "February":
        customMonthMessage = "It's February!";
        break;
    case "March":
        customMonthMessage = "It's March!";
        break;
    case "April":
        customMonthMessage = "It's April!";
        break;
    case "May":
        customMonthMessage = "It's May!";
        break;
    case "June":
        customMonthMessage = "It's June!";
        break;
    case "July":
        customMonthMessage = "It's July!";
        break;
    case "August":
        customMonthMessage = "It's August!";
        break;
    case "September":
        customMonthMessage = "It's September!";
        break;
    case "October":
        customMonthMessage = "It's October!";
        break;
    case "November":
        customMonthMessage = "It's November!";
        break;
    case "December":
        customMonthMessage = "It's December!";
        break;
    default:
        customMonthMessage = "Invalid month.";
}
document.getElementById("another_switch_example").textContent = customMonthMessage;

let seasonMessage = "";
switch (fullMonthName) {
    case "December":
    case "January":
    case "February":
        seasonMessage = "It's Winter season.";
        break;
    case "March":
    case "April":
    case "May":
        seasonMessage = "It's Spring season.";
        break;
    case "June":
    case "July":
    case "August":
        seasonMessage = "It's Summer season.";
        break;
    case "September":
    case "October":
    case "November":
        seasonMessage = "It's Fall season.";
        break;
}
document.getElementById("yet_another_switch_example").textContent = seasonMessage;

let count = 1;
let whileLoopDiv = document.getElementById("while_example");
while (count <= 5) {
    console.log("While Loop Count: " + count);
    whileLoopDiv.innerHTML += "<p>While Loop Count: " + count + "</p>";
    count++;
} 

let doCount = 25000; 
let doWhileLoopDiv = document.getElementById("do_while_example");
do {
    console.log("For now: " + doCount);
    doWhileLoopDiv.innerHTML += "<p>Current counter value for Do While loop: " + doCount + "</p>";
    doCount++;
} while (doCount <= 5);

let forLoopDiv = document.getElementById("for_example");
for (let i = 100; i <= 102; i++) {
    console.log("For Loop Count: " + i);
    forLoopDiv.innerHTML += "<p>For Loop Count: " + i + "</p>";
}

let breakLoopDiv = document.getElementById("break_example");
breakLoopDiv.innerHTML = "";
for (let j = 1; j <= 10; j++) {
    if (j === 3) {
        console.log("Breaking the loop at j = " + j);
        breakLoopDiv.innerHTML += "<p>Breaking the loop at j = " + j + "</p>";
        break;
    }
    console.log("Break Loop Count: " + j);
    breakLoopDiv.innerHTML += "<p>Break Loop Count: " + j + "</p>";
}

let continueLoopDiv = document.getElementById("continue_example");
continueLoopDiv.innerHTML = "";
for (let k = 0; k < 5; k++) {
    if (k === 2) {
        console.log("Skipping the iteration at k = " + k);
        continueLoopDiv.innerHTML += "<p>Skipping the iteration at k = " + k + "</p>";
        continue;
    }
    console.log("Continue Loop Count: " + k);
    continueLoopDiv.innerHTML += "<p>Continue Loop Count: " + k + "</p>";
}