// Minesweeper

// THE COMPUTER GENERATES 16 RANDOM NUMBERS FROM 1 TO 100, THEY CAN'T BE DUPLICATED

var randomNums = [];

while(randomNums.length < 16) {

    var random = Math.floor(Math.random() * 100) + 1;

    if(randomNums.indexOf(random) === -1) {
      randomNums.push(random);
    }
}

// debug
console.log("Mines of this turn are: ", randomNums);

// GAME RULES
alert("Welcome to Minesweeper!");
alert("The rules are quite simple: There are 16 mines. You choose a number from 1 to 100. If you choose a mine, the game is over.");

// THE USER CHOOSES 84 NUMBERS FROM 1 TO 100, HE CAN'T INSERT REPEATED NUMBERS
// IF THE USER CHOOSES A MINE (randomNums) OR REACH maxPoints THE GAME IS OVER

var userChoices = [];
var boom = false;
var maxPoints = 83;

while (boom === false && userChoices.length <= maxPoints) {

  var userNum = parseInt(prompt("Choose a number from 1 too 100"));

  if (randomNums.includes(userNum)) {
    boom = true;
    alert("Game over.");
  } else if (userChoices.includes(userNum)) {
    alert("Hey, you've already chosen this number.");
  } else if (userNum > 100 || userNum == 0){
    alert("The number needs to be from 1 to 100!");
  } else if (isNaN(userNum)) {
    alert("Please, insert a valid number.");
  } else {
    userChoices.push(userNum);
  }

}

// GAME OUTPUTS
if (userChoices.length == 0) {
  console.log("Wow, you've got it wrong in your first try: " + userNum + " was a mine.");
  console.log("Sorry, you've made 0 points.");
} else if (userChoices.length == 1) {
  console.log("You chose these numbers: ", userChoices, userNum);
  console.log(userNum + " was a mine.");
  console.log("You've made 1 point.");
} else if (userChoices.length >= maxPoints) {
  console.log("You chose these numbers: ", userChoices);
  console.log("You've made " + userChoices.length + ' points. Damn, you are good!');
  alert("You've won. Congratulations!")
} else {
  console.log("You chose these numbers: ", userChoices, userNum);
  console.log(userNum + " was a mine.");
  console.log("You've made " + userChoices.length + ' points.');
}
