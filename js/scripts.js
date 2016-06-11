////////// BACKEND //////////

// Runs the game
var gameArray = [];
var gamePlay = function(counter, total, version) {
  var alert = "TIME'S UP!";
  for (var i = 0; i <= total; i++) {
      if ((counter === 0) && (version === 1)) {
      gameArray.push(alert.fontcolor("red").fontsize("6px"));
      counter -= 1;
    } else if ((counter % 3 === 0) && (counter % 5 === 0) && (counter !== 0)) {
      gameArray.push("ping-pong");
      counter -= 1;
    } else if (counter % 5 === 0 && (counter !== 0)) {
      gameArray.push("pong");
      counter -= 1;
    } else if (counter % 3 === 0 && (counter !== 0)) {
      gameArray.push("ping");
      counter -= 1;
    } else if (counter !== 0) {
      gameArray.push(counter);
      counter -= 1;
    }
  }
  return gameArray;
}

// Chooses button to act on
var buttonChoice;
var buttonChoice = function(btn, val) {
    $("button" + btn).click(function(event) {
    $("#play").prop("disabled",true);
    $(btn + "-div").show();
    buttonChoice = 0;
    buttonChoice += val;
    return buttonChoice;
  });
}


////////// FRONTEND //////////
$(function() {
  buttonChoice("#reveal-all", 0);
  buttonChoice("#play", 1);
  buttonChoice("#reset", 2);

  $("button").on('click', function(event) {
    event.preventDefault();
    // Resets ul fields, array, and button tracker
    $("ul#play-field").empty();
    $("ul#reveal-all-field").empty();
    gameArray = [];

    var userNumber = parseInt($("#user-number").val());
    var result = gamePlay(userNumber, userNumber, buttonChoice);
    var time = 1000;

    if (buttonChoice === 2) {
      window.location.reload();
    } else if (buttonChoice === 1) {
      gameArray.forEach(function(i) {
        window.setTimeout(function() {
          $("ul#play-field").append("<li>" + i + "</li>");
        }, time);
        time += 1000;
      });
    } else {
      gameArray.forEach(function(i) {
        $("ul#reveal-all-field").append("<li>" + i + "</li>");
        $("div#rules").show();
      });
    }
  });
});
