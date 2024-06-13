

let arr = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = "";
let computerScore = "";


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        if(button.id === "ROCK"){
            playRound("ROCK", getComputerChoice());
        }else if(button.id === "PAPER"){
            playRound("PAPER", getComputerChoice());
        }else if(button.id === "SCISSOR"){
            playRound("SCISSORS", getComputerChoice());
        }

    });

});

const display = document.getElementById("display");

const humanScoreDisplay = document.createElement("p");
display.appendChild(humanScoreDisplay);


const resultDisplay = document.createElement("p");
resultDisplay.textContent = "";
display.appendChild(resultDisplay);


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
        return(resultDisplay.textContent = "It's a Draw");
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        humanScore++
        humanScoreDisplay.textContent = "Human Score : " + humanScore;
        return(resultDisplay.textContent = "You Win! Rock beats Scissors");
        
    }
    else if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        computerScore++
        return(resultDisplay.textContent = "You Lose! Paper beats Rock" );
        
    }
    else if(computerChoice === "ROCK" && humanChoice === "PAPER"){
        humanScore++
        humanScoreDisplay.textContent = "Human Score : " + humanScore;
        return(resultDisplay.textContent = "You Win! Paper beats Rock");
        
    }
    else if(computerChoice === "ROCK" && humanChoice === "SCISSORS"){
        computerScore++
        return(resultDisplay.textContent = "You Lose! Rock beats Scissors");
        
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        humanScore++
        humanScoreDisplay.textContent =  "Human Score : " + humanScore;
        return(resultDisplay.textContent = "You Win! Scissors beat Paper");
        
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        computerScore++
        return(resultDisplay.textContent = "You Lose! Rock beats Scissors");
        
    }
    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        humanScore++
        humanScoreDisplay.textContent = "Human Score : " + humanScore;
        return(resultDisplay.textContent = "You Win! Paper beats Rock");
        
    }
    else if(humanChoice === "PAPER" && computerChoice === "SCISSORS"){
        computerScore++
        return(resultDisplay.textContent = "You Lose! Scissors beats PAPER");
        
    }


};







  



