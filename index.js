// Detecting Button Press

var numberOfEffectButtons = document.querySelectorAll(".effect").length

for (var i = 0; i < numberOfEffectButtons; i++) {

  document.querySelectorAll(".effect")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {

    case "q":
      var alarm = new Audio("effects/alarm.mp3");
      alarm.play();
      break;

    case "w":
      var applaus = new Audio("effects/applaus.wav");
      applaus.play();
      break;

    case "e":
      var beer = new Audio("effects/beer.mp3");
      beer.play();
      break;

    case "r":
      var buh = new Audio("effects/buh.mp3");
      buh.play();
      break;

    case "a":
      var buzzer = new Audio("effects/buzzer.wav");
      buzzer.play();
      break;

    case "s":
      var cavalry = new Audio("effects/cavalry.mp3");
      cavalry.play();
      break;

    case "d":
      var cheers = new Audio("effects/cheers.mp3");
      cheers.play();
      break;

    case "f":
      var explosion = new Audio("effects/explosion.wav");
      explosion.play();
      break;

    case "y":
      var gameover = new Audio("effects/gameover.wav");
      gameover.play();
      break;

    case "x":
      var jokedrumkit = new Audio("effects/jokedrumkit.mp3");
      jokedrumkit.play();
      break;

    case "c":
      var laughter = new Audio("effects/laughter.mp3");
      laughter.play();
      break;

    case "v":
      var whistle = new Audio("effects/whistle.mp3");
      whistle.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
