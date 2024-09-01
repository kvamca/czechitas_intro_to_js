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
colorToRed();

// Události
