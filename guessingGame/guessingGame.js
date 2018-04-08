//Create secret Number
var secretNumber = 17;
//Ask user for guess
var guess = Number(prompt("Guess a number"));

//Check if user's guess is right. Adding (Number in front of (guess makes sure that things match up when the user guesses numbers
if(Number(guess) === secretNumber) {
    alert("YOU GOT IT RIGHT!! CONGRATS!!");
}
//Otherwise, check if higher
else if (Number(guess) > secretNumber){
        alert("That's too high, homie!");
}
//Otherwise, check if lower
else{
    alert("That's too low, bro!");
}