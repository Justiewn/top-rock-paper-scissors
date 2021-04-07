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
        playRound(score, playerChoice);
        updateScores();
        if (playerScore == 5) { winnerP.textContent = "You win the game!"; };
        if (computerScore == 5) { winnerP.textContent = "Computer won the game!"; };

    })
})

function resetGame() {
    score = []
    roundCounter = 0
    playerScore = 0;
    computerScore = 0;
    resultsP.textContent = "-";
    winnerP.textContent = "-";
    updateScores();
}

function updateScores() {
    console.log(playerP);
    playerP.textContent = `${playerScore}`;
    computerP.textContent = `${computerScore}`;
}

function playRound(score, playerChoice) {
    roundCounter++;
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
