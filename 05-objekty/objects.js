let asterix = {
    name: "Asterix",
    age: 12,
    friends: ["Obelix", "Idefix"],
    numberOfFriends: function(){
        return this.friends.length;
    }
}
console.log(asterix);

asterix.age = asterix.age + 5;

console.log(asterix.numberOfFriends())

//HW 
var currentYear = 2024;

let person = {
    firstname: "Jan",
    lastname: "Novák",
    birth: 1995,
    job: "IT",
    married: false,
    age: function (){
        return currentYear-this.birth;
    },
    yearsUntilRetirement: function retirementAge(retirementAge) {
        return retirementAge - this.age();
    }
}

console.log(person);
console.log(person.firstname + " má " + person.age() + " let.");
console.log(person.firstname + " má " + person.yearsUntilRetirement(65) + " let do důchodu.");