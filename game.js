const choices = ["rock", "paper", "scissors"];

let score = []
let roundCounter = 0
let playerScore = 0;
let computerScore = 0;

const btnChoices = document.querySelectorAll(".choices");
const playerP = document.querySelector("#player-score");
const computerP = document.querySelector("#computer-score");
const resultsP = document.querySelector("#round-result");
const winnerP = document.querySelector("#winner");

btnChoices.forEach((btnChoice) => {
    btnChoice.addEventListener("click", (e) => { 
        const chosenButton = document.querySelector(`#btn-${e.target.getAttribute('data-choice')}`);
        if (!chosenButton) return;
        let playerChoice = chosenButton.getAttribute('data-choice')
        roundCounter++;
        playRound(score, playerChoice);
        console.log(score);
        console.log(computerScore);
        updateScores();
        if (playerScore == 5) { winnerP.textContent = "You win the game!"; };
        if (computerScore == 5) { winnerP.textContent = "Computer won the game!"; };

    })
})

function updateScores() {
    console.log(playerP);
    playerP.textContent = `${playerScore}`;
    computerP.textContent = `${computerScore}`;
}

function playRound(score, playerChoice) {
    score.push(compareResults(playerChoice,computerPlay()));
    return score;
}

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    return computerChoice;
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
        computerScore++;
    }
    else if (sum == 1 || sum == -2) {
        message = `Player wins! ${ one } beats ${ two }!`;
        result = 1;
        playerScore++;
    }
    else if (sum == 0) {
        message = `Tie! You both drew ${ one }.`;
        result = 0;
    }
    else { 
        console.log("SOMETHING WENT WRONG");
        result = -1;
    }
    resultsP.textContent = `${message}`;
    return result;
    }

/* function findWinner(scoreList) {
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
} */