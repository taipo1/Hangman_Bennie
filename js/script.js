const wordList = [
  "cavia",
  "krukje",
  "tijd",
  "fors",
  "sambal",
  "zuivel",
  "kritisch",
  "jasje",
  "giga",
  "dieren",
  "lepel",
  "picknick",
  "quasi",
  "verzenden",
  "winnaar",
  "dextrose",
  "vrezen",
  "niqaab",
  "hierbij",
  "quote",
  "botox",
  "cruciaal",
  "zitting",
  "cabaret",
  "bewogen",
  "vrijuit",
  "carrière",
  "ijverig",
  "cake",
  "dyslexie",
  "uier",
  "nihil",
  "sausje",
  "kuuroord",
  "poppetje",
  "docent",
  "camping",
  "schijn",
  "kloppen",
  "detox",
  "boycot",
  "cyclus",
  "quiz",
  "censuur",
  "aaibaar",
  "chagrijnig",
  "fictief",
  "chef",
  "gering",
  "nacht",
  "cacao",
  "triomf",
  "baby",
  "ijstijd",
  "cruisen",
  "ontzeggen",
  "quad",
  "open",
  "turquoise",
  "carnaval",
  "boxer",
  "straks",
  "fysiek",
  "accu",
  "twijg",
  "quote",
  "gammel",
  "flirt",
  "futloos",
  "vreugde",
  "ogen",
  "geloof",
  "periode",
  "volwaardig",
  "uitleg",
  "stuk",
  "volk",
  "even",
  "stijl",
  "val",
  "alliantie",
  "tocht",
  "mooi",
  "joggen",
  "broek",
  "kwik",
  "werksfeer",
  "vorm",
  "nieuw",
  "sopraan",
  "miljoen",
  "inrichting",
  "klacht",
  "dak",
  "echt",
  "schikking",
  "print",
  "oorlog",
  "zijraam",
  "hyacint",
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

  showLoseScreen: () => {
    animateFunctions.hideInputAndButtons();
    document.querySelector(".lose").style.display = "block";
    gameOver = true;
  },

  showWinningScreen: () => {
    animateFunctions.hideInputAndButtons();
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
    animateFunctions.animateHangMan(tries);
  },

  // calls the right functions for false or true statements
  inputValidator: (input, word) => {
    const validatedValue = f.checkInputValue(word, input);
    if (validatedValue) {
      return;
    } else {
      tries++;
      return false;
    }
  },

  filterGuessedLetters: (word, inputs) => {
    const wrongLetters = inputs.filter((letter) => {
      return !word.includes(letter);
    });
    // Comment out for jest.
    document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(
      " "
    );
    return wrongLetters;
  },

  checkWinCondition: (word, inputs) => {
    let remaining = word.filter((letter) => {
      return !inputs.includes(letter);
    });
    // if the array is empty return true
    if (remaining.length === 0) {
      f.showWinningScreen(); // comment out for jest
      gameOver = true;
      return true;
    } else {
      return false;
    }
  },
  checkLoseCondition: (tries) => {
    if (tries === 5) {
      f.showLoseScreen(); // comment out for jest
      gameOver = true;
      return true;
    }
  },

  hideGameScreen: () => {
    document.querySelector(".win").style.display = "none";
    document.querySelector(".lose").style.display = "none";
  },
};
const f = functions;

const UpdateDomWinningWord = (word, inputLetterWords) => {
  const display = word.map((letter) => {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

//Remove letters that are in the winning word from the array . push left over to dom
const filterGuessedLetters = (word, inputs) => {
  const wrongLetters = inputs.filter((letter) => {
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

// Input handeler Master function
const guessLetter = () => {
  if (gameOver) {
    return;
  }
  const inputValue = f.fetchValue();
  // Check if value is true/false to winning word
  f.inputValidator(inputValue, word);
  // push value to inputs array
  inputs.push(inputValue);

  // Dom updates
  f.updateDomWrongInput();
  UpdateDomWinningWord(word, inputs);

  filterGuessedLetters(word, inputs);
  // check for game win/lose condition
  f.checkWinCondition(word, inputs);
  f.checkLoseCondition(tries);
};

// Game functionality

const startGame = () => {
  gameOver = false;
  inputs = [];
  tries = 0;
  f.assignWinningWord(wordList);
  document.querySelector("input").value = "";
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;
  document.querySelector(".lives span").innerHTML = 5 - 0;
  f.hideGameScreen();
  UpdateDomWinningWord(word, inputs);
  filterGuessedLetters(word, inputs);
  animateFunctions.resetHangMan();
  animateFunctions.showInputAndButtons();
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", startGame);
  startGame();
});

module.exports = functions;