

let arr = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = "";
let computerScore = "";


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        if(button.id === "ROCK"){
            playRound("ROCK", getComputerChoice());
            getWinner();
        }else if(button.id === "PAPER"){
            playRound("PAPER", getComputerChoice());
            getWinner();
        }else if(button.id === "SCISSOR"){
            playRound("SCISSORS", getComputerChoice());
            getWinner();
        }

    });

});

const display = document.getElementById("display");

const humanScoreDisplay = document.createElement("p");
display.appendChild(humanScoreDisplay);

const computerScoreDisplay = document.createElement("p");
display.appendChild(computerScoreDisplay);


const resultDisplay = document.createElement("p");
display.appendChild(resultDisplay);

const winnerDisplay = document.createElement("p");
display.appendChild(winnerDisplay);


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
        resultDisplay.textContent = "It's a Draw";
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        humanScore++
        humanScoreDisplay.textContent = "Human Score : " + humanScore;
        resultDisplay.textContent = "You Win! Rock beats Scissors";
        
    }
    else if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        computerScore++
        resultDisplay.textContent = "You Lose! Paper beats Rock";
        computerScoreDisplay.textContent = "Computer Score : " + computerScore;
        
    }
    else if(computerChoice === "ROCK" && humanChoice === "PAPER"){
        humanScore++
        humanScoreDisplay.textContent = "Human Score : " + humanScore;
        resultDisplay.textContent = "You Win! Paper beats Rock";
        
    }
    else if(computerChoice === "ROCK" && humanChoice === "SCISSORS"){
        computerScore++
        computerScoreDisplay.textContent = "Computer Score : " + computerScore;
        resultDisplay.textContent = "You Lose! Rock beats Scissors";
        
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        humanScore++
        humanScoreDisplay.textContent =  "Human Score : " + humanScore;
        resultDisplay.textContent = "You Win! Scissors beat Paper";
        
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        computerScore++
        computerScoreDisplay.textContent = "Computer Score : " + computerScore;
        resultDisplay.textContent = "You Lose! Rock beats Scissors";
        
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        humanScore++
        humanScoreDisplay.textContent = "Human Score : " + humanScore;
        resultDisplay.textContent = "You Win! Paper beats Rock";
        
    }
    else if(humanChoice === "PAPER" && computerChoice === "SCISSORS"){
        computerScore++
        computerScoreDisplay.textContent = "Computer Score : " + computerScore;
        resultDisplay.textContent = "You Lose! Scissors beats PAPER";
        
    }


};

function getWinner(){
    if(humanScore >= 5){
        winnerDisplay.textContent = "You Win! Best of 5";
    }else if(computerScore >= 5){
        winnerDisplay.textContent = "You Close! Best of 5";
    }
};





  



