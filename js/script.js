// Initialize ALL global variables here

const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];

let maxAmount = 5;
let inputs;
let word;
let gameOver;
let tries = 0;
const functions = {
  addOne: () => 1 + 1,

  wordpicker: (list) => {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  },
  checkLoser: () => {
    // when losing 5 times, this has to happen
    document.querySelector(".lose").style.display = "block";
    gameOver = true;
  },
  winTheGame: () => {
    document.querySelector(".win").style.display = "block";
    gameOver = true;
  },
};
const f = functions;

const wordGuessed = (word, inputs) => {
  // remove all letters from word that are already guessed
  // We can do this with a for loop to.
  let remaining = word.filter((letter) => {
    // If the letter is guessed return true (we want to remove that right away)
    return !inputs.includes(letter);
  });
  // If we have letters left, right?
  return remaining.length === 0;
};

const letters = (word, inputs) => {
  const wrongLetters = inputs.filter((letter) => {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const theWord = (word, inputLetterWords) => {
  const display = word.map((letter) => {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

const guessLetter = () => {
  if (gameOver) {
    return;
  }
  const input1 = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (inputs.includes(input1) || input1 === "") {
    return;
  }

  if (!word.includes(input1)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
   
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    /////  Aanroepen animatie functie Bennie /////

    animateHangMan(tries)

    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
  }

  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);

  if (wordGuessed(word, inputs)) {
    f.winTheGame();
  } else if (tries >= 5) {
    f.checkLoser();
  }
};

const getThePlayer = () => {
  let play = document.getElementById("player1");
  play = play + "We are about to start the game";
  return play;
};

const beginTheGameWithPlayer = (player1) => {
  getThePlayer(player1);
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = f.wordpicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});

// allTheWords = []
// This code here selects a random word

module.exports = functions;