

let arr = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

return(arr[(Math.floor(Math.random() * arr.length))]);

};



function getHumanChoice(){

    let userPrompt = prompt("Type Rock, Paper, Scissors");
    let userInput = userPrompt.toUpperCase();

    return(userInput);

};


function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice || computerChoice === humanChoice) {
        console.log("It's a Draw");
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("You Win! Rock beats Scissors");
    }
    else if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        console.log("You Lose! Paper beats Rock" )
    }
    else if(computerChoice === "ROCK" && humanChoice === "PAPER"){
        console.log("You Win! Paper beats Rock")
    }
    else if(computerChoice === "ROCK" && humanChoice === "SCISSOR"){
        console.log("You Lose! Rock beats Paper");
    }
    else if(humanChoice === "SCISSOR" && computerChoice === "PAPER"){
        console.log("You Win! Scissor beat Paper");
    }
    else if(humanChoice === "SCISSOR" && computerChoice === "ROCK"){
        console.log("You Lose! Rock beats Scissors");
    }
    else if(humanChoice === "PAPER" && computerChoice ==="ROCK"){
        
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);