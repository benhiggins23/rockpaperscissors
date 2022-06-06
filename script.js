//random computer selection

function computerPlay(){
    let computerChoice = ["rock", "paper", "scissors"]
    let randomChoice = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    return randomChoice
}
const computerSelection = computerPlay();

//prompt input from player
const rockbtn = document.querySelectorAll('#rock');
console.log(rockbtn);

rockbtn.addEventListener("click", testFunction);

function testFunction(){
  console.log("Hello World");

}

//let playerInput = prompt("Rock, Paper, or Scissors?");
//const playerSelection = playerInput.toLowerCase();
//convert text from player to usable format 



let computerScore=0;
let playerScore=0;

function playRockPaperScissors(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("It's a tie")
    }
    else if (playerSelection=="rock" && computerSelection=="paper"){
        console.log("You lose. Paper beats Rock");
        computerScore++;
    }
    else if (playerSelection=="rock" && computerSelection=="scissors"){
        console.log("You win! Rock beats Scissors.");
        playerScore++;
    }
    else if (playerSelection=="paper" && computerSelection=="rock"){
        console.log("You win! Paper beats Rock");
        playerScore++;
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        console.log("You lost! Scissors beat Paper.");
        computerScore++;
    }
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        console.log("You lose. Rock beats Scissors.");
        computerScore++;
    }
    else if (playerSelection=="scissors" && computerSelection=="paper"){
        console.log("You win! Scissors beats Paper.");
        playerScore++;
    }
    else {
        alert("please play again and type in a correctly spelled choice");
    }
    
}
/*
function game(){

    for(let i=1; i<6; i++){
        let playerInput = prompt("Rock, Paper, or Scissors?");
        const playerSelection = playerInput.toLowerCase();
        const computerSelection = computerPlay();
        playRockPaperScissors(playerSelection,computerSelection);
        console.log("You selected: "+playerSelection+"\nComputer Selected: "+computerSelection);
        console.log("Your Score: "+playerScore+"\nComputer Score: "+computerScore);
    }
}
*/
