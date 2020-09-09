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
      var alarm = new Audio("alarm.mp3");
      alarm.play();
      break;
    case "w":
      var applaus = new Audio("applaus.wav");
      applaus.play();
      break;

    case "e":
      var beer = new Audio("beer.mp3");
      beer.play();
      break;

    case "r":
      var buh = new Audio("buh.mp3");
      buh.play();
      break;

    case "a":
      var buzzer = new Audio("buzzer.wav");
      buzzer.play();
      break;

    case "s":
      var cavalry = new Audio("cavalry.mp3");
      cavalry.play();
      break;

    case "d":
      var cheers = new Audio("cheers.mp3");
      cheers.play();
      break;

    case "f":
      var explosion = new Audio("explosion.wav");
      explosion.play();
      break;

    case "y":
      var gameover = new Audio("gameover.wav");
      gameover.play();
      break;

    case "x":
      var jokedrumkit = new Audio("jokedrumkit.mp3");
      jokedrumkit.play();
      break;

    case "c":
      var laughter = new Audio("laughter.mp3");
      laughter.play();
      break;

    case "v":
      var whistle = new Audio("whistle.mp3");
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
