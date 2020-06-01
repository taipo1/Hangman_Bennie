// Initialize ALL global variables here

const wordList = [
  "vis",
  // "toeter",
  // "developer",
  // "telefoon",
  // "moeder",
  // "snoer",
  // "geeuw",
];

let inputs;
let word;
let gameOver;
let tries = 0;

const functions = {
  assignWinningWord: (list) => {
    const index = Math.floor(Math.random() * list.length);
    word = list[index].split("");
    return list[index].split("");
  },
  ShowLoseScreen: () => {
    // when losing 5 times, this has to happen
    document.querySelector(".lose").style.display = "block";
    gameOver = true;
  },
  showWinningScreen: () => {
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
  const inputValue = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (inputs.includes(inputValue) || inputValue === "") {
    return;
  }

  if (!word.includes(inputValue)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }

  inputs.push(inputValue);
  theWord(word, inputs);
  letters(word, inputs);

  if (wordGuessed(word, inputs)) {
    f.showWinningScreen();
  } else if (tries >= 5) {
    f.ShowLoseScreen();
  }
};

const getThePlayer = () => {
  let play = document.getElementById("player1");
  play = play + "We are about to start the game";
  return play;
};

const beginTheGameWithPlayer = (player1) => {
  // getThePlayer(player1);
  gameOver = false;
  document.querySelector("input").value = "";
  f.assignWinningWord(wordList);
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

module.exports = functions;
