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
let givenValue;

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
  // validates the input to be true or false
  checkInputValue: (word, inputs) => {
    let isTrue = false;
    if (word.includes(inputs)) {
      isTrue = true;
    }
    return isTrue;
  },
  // fetches input value
  fetchValue: () => {
    givenValue = document.querySelector("input").value;
    document.querySelector("input").value = "";

    return givenValue;
  },
  // updates the dom with wrong inputs
  updateDomWrongInput: () => {
    document.querySelector(".lives span").innerHTML = 5 - tries;
    animateHangMan(tries);
  },
  // calls the right functions for false or true statements
  inputValidator: (input, word, lives) => {
    const validatedValue = f.checkInputValue(word, input);
    if (validatedValue) {
      console.log("winning functions Called");
      return;
    } else {
      console.log("Lost functions called");
      tries++;
      functions.updateDomWrongInput(); //comment out for jest test
      return;
    }
  },
};

const f = functions;

const trackGuessedLetters = (word, inputs) => {
  // Check for right inputs within given inputs
  let remaining = word.filter((letter) => {
    // If the letter is guessed return true (we want to remove that right away)
    return !inputs.includes(letter);
  });
  console.log(remaining);
  // If we have letters left, right?
  return remaining.length === 0;
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

const letters = (word, inputs) => {
  const wrongLetters = inputs.filter((letter) => {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const guessLetter = () => {
  if (gameOver) {
    return;
  }
  const inputValue = f.fetchValue();
  f.inputValidator(inputValue, word, tries);

  inputs.push(inputValue);
  theWord(word, inputs);
  letters(word, inputs);

  if (trackGuessedLetters(word, inputs)) {
    f.showWinningScreen();
  } else if (tries >= 5) {
    f.ShowLoseScreen();
  }
};

const beginTheGameWithPlayer = (player1) => {
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

// allTheWords = []
// This code here selects a random word

module.exports = functions;
