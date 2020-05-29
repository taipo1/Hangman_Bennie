const functions = require("./script.js");

// test jest
test("should equal 2", () => {
  expect(functions.addOne()).toEqual(2);
});

// check if wordpicker returns string
test("Should return string from array", () => {
  expect(functions.wordpicker(["one", "two", "four"])).toMatch("o");
});

//Unit testing voor galgje.

// check if word picker returns a string not an array

// if lives = 0 / tries = 5  return gameOver

// Check if win condition becomes true

//
