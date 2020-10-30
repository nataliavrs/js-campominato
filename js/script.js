// Minesweeper

// variables

  var randomNums = [];
  var userChoices = [];

// the computer will generate 16 random numbers ranging from 1 to 100
  // they can't be duplicated

  while(randomNums.length < 16) {
      var random = Math.floor(Math.random() * 100) + 1;

      if(randomNums.indexOf(random) === -1) {
        randomNums.push(random);
      }
  }
  console.log("Mines are: ", randomNums);

// ask the user 100 - 16 times to choose a number ranging from 1 to 100
  // the user can't choose the same number more than once

  for (var i = 0; i <= 5; i++) {

    var userInput = parseInt(prompt("Choose a number from 1 to 100"));

    if (userChoices.indexOf(userInput) === -1) {
      userChoices.push(userInput);
    } else {
      alert("You can't repeat a number.")
    }

    // check if user chose a mine
    var includes = randomNums.includes(userInput);

    // if he chose a mine
    if (includes === true) {

      alert("Game over")
      i = 1000;
      console.log("You chose these numbers: ", userChoices);
      console.log("You scored: ", userChoices.length - 1);

      // if he uses all numbers besides mines
    } else if (userChoices.length > 5) {

      alert("You've won. Congratulations!")
      console.log("You chose these numbers: ", userChoices);
      console.log("You scored: ", userChoices.length);

    }

  }
