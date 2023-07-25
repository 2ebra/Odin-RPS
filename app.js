let playerScore = 0;
  let computerScore = 0;

  function game() {
    let rounds = 1;

    for (i=1; i <= rounds; i++) {
      console.log("+ - - ROUND "+ i + " - - +");
      playRound()
    }
    whoWon();

    
  }

  function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("ROCK, PAPER, SCISSORS:", "ROCK")

    console.log (playerSelection + " vs " + computerSelection);

    if(playerSelection === computerSelection){
      console.log("Tied")
    }
    if(playerSelection==="ROCK" && computerSelection==="SCISSORS" ||
      playerSelection==="PAPER" && computerSelection==="ROCK" ||
      playerSelection==="SCISSORS" && computerSelection==="PAPER" ) {
        playerScore++;
        console.log("Point for player!");
      }
    if(playerSelection==="ROCK" && computerSelection==="PAPER" ||
      playerSelection==="PAPER" && computerSelection==="SCISSORS" ||
      playerSelection==="SCISSORS" && computerSelection==="ROCK" ) {
        computerScore++;
        console.log("Point for computer!");
      }


      console.log("Player: " + playerScore);
      console.log("Computer: "+computerScore);
    
  }

  function getComputerChoice() {
    let random = Math.floor(Math.random()*3)+1;

    if(random === 1){
      return "ROCK";
    }
    if(random === 2){
      return "PAPER";
    }
    if(random === 3){
      return "SCISSORS";
    } 
  }

  function whoWon(){
    if (computerScore > playerScore){
      console.log ("YOU LOST");
    }
    else if (playerScore > computerScore){
      console.log ("YOU WON");
    }
    else{
      console.log("+ - - BREAK THE TIE - - +");
      playRound();
      whoWon();
    }
  }

  //game();