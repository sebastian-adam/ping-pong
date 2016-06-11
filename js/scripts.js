// BACKEND
var gameArray = [];

var gameForfeit = function(counter, total) {
  for (var i = 0; i < total; i++) {
    if ((counter % 3 === 0) && (counter % 5 === 0)) {
      gameArray.push("ping-pong");
      counter -= 1;
    } else if (counter % 5 === 0) {
      gameArray.push("pong");
      counter -= 1;
    } else if (counter % 3 === 0) {
      gameArray.push("ping");
      counter -= 1;
    } else {
      gameArray.push(counter);
      counter -= 1;
    }
  }
  return gameArray;
}

var gamePlay = function(counter, total, version) {
  var alert = "TIME'S UP!";
  for (var i = 0; i <= total; i++) {
      if (counter === 0){
      gameArray.push(alert.fontcolor("red"));
      counter -= 1;
    } else if ((counter % 3 === 0) && (counter % 5 === 0)) {
      gameArray.push("ping-pong");
      counter -= 1;
    } else if (counter % 5 === 0) {
      gameArray.push("pong");
      counter -= 1;
    } else if (counter % 3 === 0) {
      gameArray.push("ping");
      counter -= 1;
    } else {
      gameArray.push(counter);
      counter -= 1;
    }
  }
  return gameArray;
}







// FRONTEND
$(function() {
  $("#reveal-all").click(function(event) {
    event.preventDefault();

    // Resets ul field and array
    $("ul#result-field").empty();
    gameArray = [];

    var userNumber = parseInt($("#user-number").val());
    var result = gameForfeit(userNumber, userNumber);

    gameArray.forEach(function(i) {
      $("ul#result-field").append("<li>" + i + "</li>");
    });
  });
  $("#play").click(function(event) {
    event.preventDefault();

    $("ul#result-field").empty();
    gameArray = [];

    var userNumber = parseInt($("#user-number").val());
    var result = gamePlay(userNumber, userNumber);
    var time = 1000;

    gameArray.forEach(function(i) {
      setTimeout(function() {
        $("ul#result-field").append("<li>" + i + "</li>");
      }, time);
      time += 1000;
    });
  });
});
