// Funkce
function greetings(){
    console.log("hello world")
}

//greetings()

function addition(num1,num2){
    let total = num1+num2;
    return total;
}
//console.log(addition(2,6));

function colorToRed(){
    //ziskat element obdelniku
    let rectangle = document.querySelector(".obdelnik");
    //obarvit na cervenou
    rectangle.style.backgroundColor = "darkred";
}
//colorToRed();

// HW 1: 
//amend the "colorToRed" function so it accepts one argument (String), 
// where will be name, hex code or rbg() colors - with which we can color the rectangle

function fillWithAnyColor(colorHex){
    let rectangle = document.querySelector(".obdelnik");

    rectangle.style.backgroundColor = colorHex;
}
//fillWithAnyColor("#000000")

// HW 2: 

let numSymbol;

function calculator(n1,n2,numSymbol){
    if (numSymbol === "+"){
        let result = n1 + n2;
        alert(result);
    }
    else if (numSymbol === "-"){
        let result = n1 - n2;
        alert(result);
    }
    else if (numSymbol === "/"){
        let result = n1 / n2;
        alert(result);
    }
    else if (numSymbol === "*"){
        let result = n1 * n2;
        alert(result);
    }
}
//calculator(8,2,"/")



// Události

let square = document.querySelector(".ctverec")
let rectangle = document.querySelector(".obdelnik")

//square.addEventListener("click", makeIntoCircle);

//Option1:

// function makeIntoCircle() {
//     square.style.borderRadius = "50%";
// }


// square.addEventListener("dblclick", makeIntoRectangle);
// function makeIntoRectangle() {
//    square.style.borderRadius = "0%";
// }

//Option2: 

// function makeIntoCircle() {
//     square.classList.toggle("kruh");
// }

//Option3 (aninymní funkce):
square.addEventListener("click", function(){
    square.classList.toggle("kruh");
});

rectangle.addEventListener("mouseenter", function(){
    rectangle.style.backgroundColor = "#ff4242";
});

rectangle.addEventListener("mouseleave", function(){
    rectangle.style.backgroundColor = "#ffffff";
});

window.addEventListener("keydown", function(event){
    if (event.key === " ") {
        rectangle.classList.toggle("otoc");   
    }
});

