// Minesweeper

/*
1) Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
2. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero
alla volta, sempre compreso tra 1 e 100.
3) L’utente non può inserire più volte lo stesso numero.
4) Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
5) La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
6) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

var welcome = alert("Welcome to Minesweeper!")

// the computer will generate 16 random numbers ranging from 1 to 100
  // they can't be duplicated

// ask the user 100 - 16 times to choose a number ranging from 1 to 100
  // the user can't choose the same number more than one time

// if the user's chosen number is equal to any of the 16 random numbers of the computer, game over otherwise keeping asking for numbers

// game over when the users chooses any number from the 16 that the computer generated or he asked the maximum of numbers possible

// when the game is over show how many points the users got, how many accepted numbers he managed to write before finding a forbidden one 
