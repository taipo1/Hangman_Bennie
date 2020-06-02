const animateFunctions = {
  animateHangMan: function (tries) {
    if (tries === 1) {
      document.querySelector("#rope").style.visibility = "visible";
      document.querySelector("#rope-2").style.visibility = "visible";
    }

    if (tries === 2)
      document.querySelector("#head").style.visibility = "visible";

    if (tries === 3)
      document.querySelector("#body").style.visibility = "visible";

    if (tries === 4) {
      document.querySelector("#arm").style.visibility = "visible";
      document.querySelector("#arm-2").style.visibility = "visible";
    }

    if (tries === 5) {
      document.querySelector("#leg").style.visibility = "visible";
      document.querySelector("#leg-2").style.visibility = "visible";
      document.querySelector("#foot").style.visibility = "visible";
    }
  },

  resetHangMan: function () {
    document.querySelector("#head").style.visibility = "hidden";
    document.querySelector("#body").style.visibility = "hidden";
    document.querySelector("#arm").style.visibility = "hidden";
    document.querySelector("#arm-2").style.visibility = "hidden";
    document.querySelector("#leg").style.visibility = "hidden";
    document.querySelector("#leg-2").style.visibility = "hidden";
    document.querySelector("#foot").style.visibility = "hidden";
  },

  hideInputAndButtons: function () {
    document.querySelector("#current-word-wrapper").style.visibility = "hidden";
  },

  showInputAndButtons: function () {
    document.querySelector("#current-word-wrapper").style.visibility =
      "visible";
  },
};

module.exports = animateFunctions;
