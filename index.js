var player1Score = 0
var player2Score = 0

function soundEffect(){
    var randomNumber3 = Math.floor(Math.random() * 21) + 1;
    var llamaSound = new Audio("audio/sound" + randomNumber3 + ".wav");
    llamaSound.play();
}

function titleSound(){
  var tit = new Audio("audio/Title.wav");
  tit.play();
}


function playGame(){

  var randomNumber1 = Math.floor(Math.random() * 21) + 1;
  var randomLlama1 = "images/llama" + randomNumber1 + ".png";
  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomLlama1);


  var randomNumber2 = Math.floor(Math.random() * 21) + 1;
  var randomLlama2 ="images/llama" + randomNumber2 + ".png";
  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomLlama2)


  var running = true

  while(running) {
                            // CRABS
    if (randomNumber1 === 13 && randomNumber2 === 13){
      document.querySelector("h2").innerHTML = "WE GAVE EACHOTHER CRABS! 😍🕺🏻😘";
    }
    else if (randomNumber1 === 13) {
      document.querySelector("h2").innerHTML = "PLAYER 1 HAVE CRABS + $347!!";
      player1Score += 347;
    }
    else if (randomNumber2 === 13) {
      document.querySelector("h2").innerHTML = "PLAYER 2 HAVE CRABS! + $347!";
      player2Score += 347;
    }

                              // antelope
    else if (randomNumber1 === 16 && randomNumber2 === 16){
      document.querySelector("h2").innerHTML = "ALL YOU FINANCE RAVISHED BY TONGUE OF ANTELOPE!";
      player1Score = 0;
      player2Score = 0;
    }
    else if (randomNumber1 === 16) {
      document.querySelector("h2").innerHTML = "PLAYER 1 GOT LICKED BY ANTELOPE! -$249";
      player1Score -= 249;
    }
    else if (randomNumber2 === 16) {
      document.querySelector("h2").innerHTML = "THE ANTELOPE LICKED PLAYER 2! -$249!";
      player2Score -= 249;
    }

                          // All others
    else if (randomNumber1 > randomNumber2) {
      document.querySelector("h2").innerHTML = "👳🏿Player 1 winned!!!";
      player1Score += 87;
    }
    else if (randomNumber2 > randomNumber1) {
      document.querySelector("h2").innerHTML = "player2 has winned!!!🧜🏿‍"
      player2Score += 87;
    }
    else if (randomNumber1 = randomNumber2){
      document.querySelector("h2").innerHTML = "Draw!!!🍆🍆🍆"
  }
  document.querySelectorAll(".score")[0].innerHTML = "Player1 Money: $" + player1Score;
  document.querySelectorAll(".score")[1].innerHTML = "Player2 Money: $" + player2Score;
  running = false
  }
}
