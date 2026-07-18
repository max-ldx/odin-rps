const choices = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

const scores = {
    humanScore = 0,
    computerScore = 0
}

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber >= 2 / 3) {
        return choices.ROCK;
    } else if (randomNumber >= 1 / 3) {
        return choices.PAPER
    } else {
        return choices.SCISSORS;
    }
}

function getHumanChoice() {
    return prompt("Rock, paper or scissors?");
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getHumanChoice());