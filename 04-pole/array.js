let array = [5, "ahoj", false, "květina"];

array[2] = true; //changes third value to true


array.push("květináč"); //adds to the start
array.unshift("hlína"); //adds to the end
array.push(1, 2, 3);

console.log(array);

let lastValue = array.pop(); //removes from the end
let firstValue = array.shift() //removes from the start

console.log(array);
console.log("removed from last place: " + lastValue);
console.log("removed from first place: " + firstValue);


console.log(array)
console.log(array.indexOf(false)); //returns -1 if value does not exist in the array 
console.log(array.indexOf("květina")); //returns position of the value if the value exists in the array 


// Přístup k jednomu prvku za druhým

let skrinka = ["šaty", "trička", "kalhoty", "svetry", "ponožky"];

for (let i = 0; i < skrinka.length; i++) {
   let soucasnyPrvek = skrinka[i];
   console.log(soucasnyPrvek)
}

//HW
// Find out if Falbala and Caesar are in the list. 
//Use function indexOf() and in-else block for listing whether they are in the list or not.

let people = ["Asterix", "Obelix", "Caesar", "Idefix", "Panoramix", "Falbala", "Oceanix"]

//variant 1
for (let i = 0; i<people.length; i++) {
    let found = people[i];
    if (found === "Falbala" | found === "Caesar") {
        console.log(found, i);
    }
}

//variant 2
for (let i = 0; i<people.length; i++) {
    let found = people[i];
    if (found === "Falbala") {
        console.log(people.indexOf("Falbala"));
    } else if (found === "Caesar") {
        console.log(people.indexOf("Caesar")); 
    }
}

//Variant 3
// Check for Falbala
if (people.indexOf("Falbala") !== -1) {
    console.log("Falbala is in the list.");
} else {
    console.log("Falbala is not in the list.");
}

// Check for Caesar
if (people.indexOf("Caesar") !== -1) {
    console.log("Caesar is in the list.");
} else {
    console.log("Caesar is not in the list.");
}