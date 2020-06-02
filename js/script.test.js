const functions = require("./script.js");
//Unit testing for hangman .

// 1. starten van de game d.m.v. het kiezen van het woord
test("should return the chosen word array", () => {
  const testArray = ["test"];
  expect(functions.assignWinningWord(testArray)).toEqual(["t", "e", "s", "t"]);
});
// 2. checken of een letter voorkomt in het woord
test("guessed letter should return true ", () => {
  word = ["t", "e", "t", "s"];
  guessedLetters = "t";
  expect(functions.checkInputValue(word, guessedLetters)).toEqual(true);
});
// komt niet voor in het woord
test("guessed letter should return false ", () => {
  word = ["t", "e", "t", "s"];
  guessedLetters = "g";
  expect(functions.checkInputValue(word, guessedLetters)).toEqual(false);
});
// 3. updaten van het aantal pogingen van de gebruiker
test("adding/retracting tries from the play ", () => {
  const wrongLetter = "g";
  const word = ["t", "e", "s", "t"];
  expect(functions.inputValidator(wrongLetter, word)).toEqual(false);
});
// 4. updaten van de lijst met letters die al geraden
//    zijn door de gebruiker
test("is the guessed letter added to the array ", () => {
  word = ["t", "e", "s", "t"];
  inputs = ["t", "e", "s", "g"];
  expect(functions.filterGuessedLetters(word, inputs)).toEqual(["g"]);
});

// 5. verliezen van de game wanneer er geen pogingen meer over zijn
test("Make GameOver TRUE when lives reaches 5", () => {
  let tries = 5;
  let gameOver = false;
  expect(functions.checkLoseCondition(tries)).toEqual(true);
});

test("Make GameOver TRUE when lives reaches 5 fails", () => {
  let tries = 4;
  let gameOver = false;
  expect(functions.checkLoseCondition(tries)).toEqual(false);
});

// 6. winnen van de game
test("Check if our win condition triggers at the right moment", () => {
  const word = ["t", "e", "t", "s"];
  const letterArray = ["t", "e", "t", "s"];
  expect(functions.checkWinCondition(word, letterArray)).toEqual(true);
});

test("Check if win condition comes back as false when word is not completed", () => {
  const word = ["t", "e", "t", "s"];
  const letterArray = ["t", "e", "t"];
  expect(functions.checkWinCondition(word, letterArray)).toEqual(false);
});