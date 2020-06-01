const functions = require("./script.js");
//Unit testing voor galgje.

// 1. starten van de game d.m.v. het kiezen van het woord
test("should return the chosen word array", () => {
  const testArray = ["test"];
  expect(functions.assignWinningWord(testArray)).toEqual(["t", "e", "s", "t"]);
});
// 2. checken of een letter voorkomt in het woord

// 3. updaten van het aantal pogingen van de gebruiker

// 4. updaten van de lijst met letters die al geraden
//    zijn door de gebruiker

// 5. verliezen van de game wanneer er geen pogingen meer over zijn

// 6. winnen van de game
