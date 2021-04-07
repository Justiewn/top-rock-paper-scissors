const choices = ["rock", "paper", "scissors"];

let score = []
let roundCounter = 0

const btnChoices = document.querySelectorAll(".choices");
console.log(btnChoices);

btnChoices.forEach((btnChoice) => {
    btnChoice.addEventListener("click", (e) => {
        console.log("yes");
        const chosenButton = document.querySelector(`#btn-${e.target.getAttribute('data-choice')}`);
        if (!chosenButton) return;
        let playerChoice = chosenButton.getAttribute('data-choice')
        playRound(score, playerChoice);
    })
})

function playRound(score, playerChoice) {
    score.push(compareResults(playerChoice,computerPlay()));
    return score;
}

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    return computerChoice;
}

function getUserInput() {
    let choice = "paper";
    return choice;
}

function compareResults(one, two) {
    let p = choices.indexOf(one)+1;
    let c = -(choices.indexOf(two)+1);
    let sum = p + c;
    let message = "huh";
    let result;
    if (sum == -1 || sum == 2) {
        message = `Computer wins! ${ two } beats ${ one }!`;
        result = 2;
    }
    else if (sum == 1 || sum == -2) {
        message = `Player wins! ${ one } beats ${ two }!`;
        result = 1;
    }
    else if (sum == 0) {
        message = `Tie! You both drew ${ one }.`;
        result = 0;
    }
    else { 
        console.log("something went wrong");
        result = -1;
    }
    console.log(message);
    return result;
    }

/* function game() {
    console.log("game start");
    let score = [];
    for (i=0; i < 5; i++){
        playRound(score);
    }
    findWinner(score);
} */


function findWinner(scoreList) {
    let playerScore = 0;
    let computerScore = 0;
    let winner = '';
    for (x = 0; x < scoreList.length; x++) {
        if (scoreList[x] == 1) { playerScore++;}
        else if (scoreList[x]  == 2) { computerScore ++;}
    }
    if (playerScore == computerScore) { winner = 'tied'; return winner;}
    else if (playerScore > computerScore) { winner = 'player'; return winner;}
    winner = 'computer';
    if (winner == "tied") {
        console.log("Game resulted in a tie!");
    }   
    if (winner == "player") {
        console.log("You win the game!");
    }
    if (winner == "computer") {
        console.log("Computer won the game!");
    }
}