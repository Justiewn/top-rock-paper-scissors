const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    return computerChoice;

}

function getUserInput() {
    return prompt("Choose and type out rock, paper, or scissors!").toLowerCase();
}

function compareResults(one, two) {
    let p = choices.indexOf(one)+1;
    let c = -(choices.indexOf(two)+1);
    console.log(p, c)
    let sum = p + c;
    let result = "huh";
    if (sum == -1 || sum == 2) {
        result = `Computer wins! ${ two } beats ${ one }!`;
    }
    else if (sum == 1 || sum == -2) {
        result = `Player wins! ${ one } beats ${ two }!`;
    }
    else if (sum == 0) {
        result = `Tie! You both drew ${ one }.`;
    }
    else { console.log("something went wrong")}
    
    console.log(result);
    }
    


console.log(compareResults(getUserInput(),computerPlay()));