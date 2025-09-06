
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) +1;

    if (choice=== 1){
        return "Rock";
    }
    else if (choice===2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?");
    return choice;
}

function playGame(){

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice){
   
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice===computerChoice){
        console.log("It's a tie! You both chose " + humanChoice);
    } else if(
        (humanChoice=== "rock" && computerChoice=== "scissors") ||
        (humanChoice=== "paper" && computerChoice=== "rock") ||
        (humanChoice=== "scissors" && computerChoice=== "paper")
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++

    } else{
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }
}