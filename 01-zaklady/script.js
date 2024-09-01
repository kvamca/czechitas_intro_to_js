//console.log("Hello world");

// let age = 84;

// let firstName;
// firstName = "Kamila";

// alert("Jmenuji se " + firstName + "a je mi " + age + "let.")

// vyhodí alert s inputem, který se nádledně uloží a vypíše do konzole
// let password = prompt("Input password");
// console.log(password);

// input weight and program will tell you if your weight changed
console.log("Assignment 1")
let weightLastMonth = 50;
let weightThisMonth;
weightThisMonth = prompt("Input weight");
if (weightLastMonth < weightThisMonth) {
   alert("You gained weight");
}
else if (weightLastMonth > weightThisMonth) {
   alert("You lost weight");
}
else {
   alert("Weight is the same");
}

// for-cycle example
// for (let i = 1; i < 5; i = i+1) {
//    console.log(i);
// }


// stop when dice number is 6
console.log("Assignment 2")
let repeat = true;
while (repeat) {
    let dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    if(dice == 6) {
        repeat = false;
    }

}

// write all numbers from 10 to 1
console.log("Assignment 3")
let number = 10;
while (number != 0) {
    console.log(number)
    number = number - 1;
}

// variables show border numbers of a string
console.log("Assignment 4")
let start = 8;
let finish = 13;

for (let j = start; j<=finish; j=j+1) {
    console.log(j);
}
