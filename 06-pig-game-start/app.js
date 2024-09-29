let points;
let pointsInOneRound;
let activePlayer;
let dice;
let finalPoints;

points = [0, 0];
pointsInOneRound = 0;
activePlayer = 0;
finalPoints = 25;


document.getElementById("body-0").textContent = "0";
document.getElementById("body-1").textContent = "0";
document.getElementById("soucasne-0").textContent = "0";
document.getElementById("soucasne-1").textContent = "0";


document.querySelector(".kostka").style.display = "none";

document.querySelector(".tlacitko-hod").addEventListener("click", function(){
    // 1. Random number
    dice = Math.ceil(Math.random()*6);
    //2. Show in game
    let diceDOM = document.querySelector(".kostka");
    diceDOM.style.display = "block";
    diceDOM.textContent = dice;
    //3. Refresh points if there is (not) 1
    
});