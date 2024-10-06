let points;
let pointsInOneRound;
let activePlayer;
let dice;
let finalPoints;
let gameRunning;

finalPoints = document.getElementById('winner-points');
finalPoints.addEventListener('input', function() {
    if (this.value === '') {
        finalPoints = 20;
    } else {
        finalPoints = Number(this.value);
    }
});

finalPoints = 20;

function init(){
    points = [0,0];
    activePlayer = 0;
    pointsInOneRound = 0;
    gameRunning = true;

    document.querySelector(".kostka").style.display = "none";

    document.getElementById("body-0").textContent = "0";
    document.getElementById("body-1").textContent = "0";
    document.getElementById("soucasne-0").textContent = "0";
    document.getElementById("soucasne-1").textContent = "0";

    document.querySelector("#jmeno-0").textContent = "Player 1";
    document.querySelector("#jmeno-1").textContent = "Player 2";

    document.querySelector(".hrac-0-panel").classList.remove("aktivni");
    document.querySelector(".hrac-1-panel").classList.remove("aktivni");
    document.querySelector(".hrac-0-panel").classList.remove("vitez");
    document.querySelector(".hrac-1-panel").classList.remove("vitez");
    document.querySelector(".hrac-0-panel").classList.add("aktivni");

};

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    pointsInOneRound = 0;
    document.getElementById("soucasne-0").textContent = "0";
    document.getElementById("soucasne-1").textContent = "0";

    document.querySelector(".hrac-0-panel").classList.toggle("aktivni");
    document.querySelector(".hrac-1-panel").classList.toggle("aktivni");
    
}

init();

document.querySelector(".kostka").style.display = "none";

document.querySelector(".tlacitko-hod").addEventListener("click", function(){
if (gameRunning) {

    dice = Math.ceil(Math.random()*6);                   //1. Random number
    let diceDOM = document.querySelector(".kostka");     //2. Show in game
    diceDOM.style.display = "block";
    diceDOM.textContent = dice;
    
    if (dice !== 1) {                                   //3. Refresh points if there is (not) 1
    pointsInOneRound += dice;                           //4. Update points for player
    document.querySelector("#soucasne-" + activePlayer).textContent = pointsInOneRound;
    } else { 
            nextPlayer();
    }
    
} else {
    
}
    });

document.querySelector(".tlacitko-dost").addEventListener("click", function () {
if (gameRunning) {
    points[activePlayer] += pointsInOneRound;

    document.querySelector("#body-" + activePlayer).textContent = points[activePlayer];

    if (points[activePlayer] >= finalPoints) {
        document.querySelector("#jmeno-" + activePlayer).textContent = "Winner!";
        document.querySelector(".hrac-" + activePlayer + "-panel").classList.remove("aktivni");
        document.querySelector(".hrac-" + activePlayer + "-panel").classList.add("vitez");
        document.querySelector(".kostka").style.display = "none";
        gameRunning = false;

    } else {
        nextPlayer();
    }
    
} else {
    
}       
});

document.querySelector(".tlacitko-novy").addEventListener("click", init);
