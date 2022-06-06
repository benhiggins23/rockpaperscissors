//random computer selection

function computerPlay(){
    let computerChoice = ["rock", "paper", "scissors"]
    let randomChoice = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    return randomChoice
}

//prompt input from player
const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
//console.log(rockbtn);

rockbtn.addEventListener("click", () => game("rock"));
paperbtn.addEventListener("click", () => game("paper"));
scissorsbtn.addEventListener("click", () => game("scissors"));

function game(input){
  let playerSelection = input;
  const computerSelection = computerPlay();
  playRockPaperScissors(playerSelection,computerSelection);
  };

let computerScore=0;
let playerScore=0;

function updateScore(whoWon){
    const container = document.querySelector("#container");
    
        if (whoWon === "tie"){
        container.innerHTML = "It's a tie";
    } else if (whoWon ==="player"){
        container.innerHTML = "You won";
    }else{
        container.innerHTML = "You lost";
    }

    const score = document.querySelector('#score');
    score.innerHTML = "Your Score: "+playerScore+"\nComputer Score: "+computerScore;
    


}

function playRockPaperScissors(playerSelection, computerSelection){
    
    
    if(playerSelection == computerSelection){
       // console.log("It's a tie")
       updateScore("tie");
      
    }
    else if (playerSelection=="rock" && computerSelection=="paper"){
        //console.log("You lose. Paper beats Rock");
        ++computerScore;
        updateScore("computer");
        //console.log("Your Score: "+playerScore+"\nComputer Score: "+computerScore);
    }
    else if (playerSelection=="rock" && computerSelection=="scissors"){
        //console.log("You win! Rock beats Scissors.");
        ++playerScore;
        updateScore("player");
        
    }
    else if (playerSelection=="paper" && computerSelection=="rock"){
        //console.log("You win! Paper beats Rock");
        playerScore++;
        updateScore("player");
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        //console.log("You lost! Scissors beat Paper.");
        computerScore++;
        updateScore("computer");       
    }
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        //console.log("You lose. Rock beats Scissors.");
        computerScore++;
        updateScore("computer");
    }
    else if (playerSelection=="scissors" && computerSelection=="paper"){
        //console.log("You win! Scissors beats Paper.");
        playerScore++;
        updateScore("player");
    }
    else {
        alert("please play again and type in a correctly spelled choice");
    }
    
}

/*
function game(){

    for(let i=1; i<6; i++){
        
        const playerSelection = playerInput.toLowerCase();
        const computerSelection = computerPlay();
        playRockPaperScissors(playerSelection,computerSelection);
        console.log("You selected: "+playerSelection+"\nComputer Selected: "+computerSelection);
        console.log("Your Score: "+playerScore+"\nComputer Score: "+computerScore);
    }
}
*/
