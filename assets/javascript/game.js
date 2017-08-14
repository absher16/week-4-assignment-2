var gem1Value; 
var gem2Value;
var gem3Value; 
var gem4Value; 
var gemSum;
var targetNumber;
var wins = 0;
var losses = 0;

function newGame() {
    gem1Value = Math.floor(Math.random()*12)+1;
    gem2Value = Math.floor(Math.random()*12)+1;
    gem3Value = Math.floor(Math.random()*12)+1;
    gem4Value = Math.floor(Math.random()*12)+1;
    gemSum = 0;
    targetNumber = Math.floor(Math.random()*120);
};

$(document).ready(function() {

newGame();

$("#target").html(targetNumber);

// $("#win").html(wins);
// $("#loss").html(losses);

console.log("gem1 is worth " + gem1Value);
console.log("gem2 is worth " + gem2Value);
console.log("gem3 is worth " + gem3Value);
console.log("gem4 is worth " + gem4Value);

$("#gem1").on("click", function(){
    gemSum += gem1Value;   
    console.log("gemSum is " + gemSum);
    $("#yourScore").html(gemSum);
    $("#win").html(wins);
    $("#loss").html(losses);

    if (gemSum == targetNumber) {
    console.log("win");
    wins++;
    newGame();} 

    else if (gemSum > targetNumber) {
    console.log("lose");
    losses++;
    newGame();
    };
});

$("#gem2").on("click", function(){
    gemSum += gem2Value;   
    console.log("gemSum is " + gemSum);
    $("#yourScore").html(gemSum);
    $("#win").html(wins);
    $("#loss").html(losses);

    if (gemSum == targetNumber) {
    console.log("win");
    wins++;
    newGame();} 

else if (gemSum > targetNumber) {
    console.log("lose");
    losses++;
    newGame();};
});

$("#gem3").on("click", function(){
    gemSum += gem3Value;   
    console.log("gemSum is " + gemSum);
    $("#yourScore").html(gemSum);
    $("#win").html(wins);
    $("#loss").html(losses);

    if (gemSum == targetNumber) {
    console.log("win");
    wins++;
    newGame();} 

else if (gemSum > targetNumber) {
    console.log("lose");
    losses++;
    newGame();
    };
});

$("#gem4").on("click", function(){
    gemSum += gem4Value;   
    console.log("gemSum is " + gemSum);
    $("#yourScore").html(gemSum);
    $("#win").html(wins);
    $("#loss").html(losses);

    if (gemSum == targetNumber) {
    console.log("win");
    wins++;
    newGame();} 

else if (gemSum > targetNumber) {
    console.log("lose");
    losses++;
    newGame();
    };
});


/*
if (gemSum == targetNumber) {
    console.log("win");
    wins++;
    newGame();} 

else if (gemSum > targetNumber) {
    console.log("lose");
    losses++;
    newGame();
    };
*/

});
