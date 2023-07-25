let playerScore = 0;
let computerScore = 0;
let round = 1;
let winner = false;

const playerPoints = document.getElementById("playerPoints")
playerPoints.innerText = `${playerScore}`;
const computerPoints = document.getElementById("computerPoints")
computerPoints.innerText = `${computerScore}`;
const roundWinner = document.getElementById("roundWinner");
const currentRound= document.getElementById("currentRound");
const playerWeapon = document.getElementById("playerWeapon");
const computerWeapon = document.getElementById("computerWeapon");

let playerIcon = document.createElement('img');
let computerIcon = document.createElement('img');

const playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    winner = false;

    playAgain.innerText="";

    currentRound.innerText = `Let's get this party`;
    roundWinner.innerText = `restarted`;
})


const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playGame(button.id);
        console.log(button.id);
    });
  });

//Checks to see if there's already a winner
  function playGame(playerSelection) {
    if(winner===false){
        playRound(playerSelection);
    }
  }

//Plays a round
  function playRound(playerSelection) {
    
    let computerSelection = getComputerChoice();

    console.log(playerSelection + " VS " + computerSelection);

    weaponSelection(playerSelection, computerSelection);

    if(playerSelection === computerSelection){
        currentRound.innerText = `Round ${round}`
        roundWinner.innerText = `Tied`;
    }
    if(playerSelection==="Rock" && computerSelection==="Scissors" ||
      playerSelection==="Paper" && computerSelection==="Rock" ||
      playerSelection==="Scissors" && computerSelection==="Paper" ) {
        playerScore++;
        currentRound.innerText = `Round ${round}`
        roundWinner.innerText = `You Won`;
        round++;
      }
    if(playerSelection==="Rock" && computerSelection==="Paper" ||
      playerSelection==="Paper" && computerSelection==="Scissors" ||
      playerSelection==="Scissors" && computerSelection==="Rock" ) {
        computerScore++;
        currentRound.innerText = `Round ${round}`
        roundWinner.innerText = `You Lost`;
        round++;
      }

      playerPoints.innerText = `${playerScore}`;
      computerPoints.innerText = `${computerScore}`;

      console.log(playerScore + " " + computerScore);

      if(playerScore === 3 || computerScore === 3){
        whoWon()
      }
  }

//Gets computers randomized selection
  function getComputerChoice() {
    let random = Math.floor(Math.random()*3)+1;

    if(random === 1){
      return "Rock";
    }
    if(random === 2){
      return "Paper";
    }
    if(random === 3){
      return "Scissors";
    } 
  }

//Updates images
  function weaponSelection(playerSelection, computerSelection){
    
    playerIcon.setAttribute(
        'src',
        `imgs/${playerSelection}.svg`
    )

    computerIcon.setAttribute(
        'src',
        `imgs/${computerSelection}.svg`
    )

    playerWeapon.appendChild(playerIcon);
    computerWeapon.appendChild(computerIcon);
  }

//Lets you know who won and chnages winner boolean
  function whoWon(){
    if (computerScore > playerScore){
        currentRound.innerText = "Game Over"
        roundWinner.innerText = "You Lost";
    }
    else{
        currentRound.innerText = "Game Over"
        roundWinner.innerText = "You Won";
    }

    winner = true;
    playAgain.innerText = "Play Again?";
  }
