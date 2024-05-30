

let arr = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = 0;
let computerScore = 0;
let round = 5;

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
        humanScore++
        console.log("You Win! Rock beats Scissors");
        
    }
    else if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        computerScore++
        console.log("You Lose! Paper beats Rock" );
        
    }
    else if(computerChoice === "ROCK" && humanChoice === "PAPER"){
        humanScore++
        console.log("You Win! Paper beats Rock");
        
    }
    else if(computerChoice === "ROCK" && humanChoice === "SCISSOR"){
        computerScore++
        console.log("You Lose! Rock beats Paper");
        
    }
    else if(humanChoice === "SCISSOR" && computerChoice === "PAPER"){
        humanScore++
        console.log("You Win! Scissor beat Paper");
        
    }
    else if(humanChoice === "SCISSOR" && computerChoice === "ROCK"){
        computerScore++
        console.log("You Lose! Rock beats Scissors");
        
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        humanScore++
        console.log("You Win! Paper beats Rock");
        
    }
    else if(humanChoice === "PAPER" && computerChoice === "SCISSOR"){
        computerScore++
        console.log("You Lose! SCISSORS beats PAPER");
        
    }


};






//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();



function playGame(){

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());


};




playGame();
