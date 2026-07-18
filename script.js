const choices = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

const players = {
    NONE: "none",
    HUMAN: "human",
    COMPUTER: "computer"
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

function playGame() {
    function playRound(humanChoice, computerChoice) {
        const loweredHumanChoice = humanChoice.toLowerCase();

        if (loweredHumanChoice === computerChoice) {
            return players.NONE;
        }

        if (loweredHumanChoice === choices.ROCK) {
            return computerChoice === choices.PAPER ? players.COMPUTER : players.HUMAN;
        }

        if (loweredHumanChoice === choices.PAPER) {
            return computerChoice === choices.ROCK ? players.HUMAN : players.COMPUTER;
        }

        return computerChoice === choices.ROCK ? players.COMPUTER : players.HUMAN;
    }

    function displayRoundWinner(roundWinner, humanChoice, computerChoice) {
        const capitalizedHumanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1);
        const capitalizedComputerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1);

        if (roundWinner === players.NONE) {
            console.log(`Tie! ${capitalizedHumanChoice} is equal to ${computerChoice}`);
        } else if (roundWinner === players.HUMAN) {
            console.log(`You win! ${capitalizedHumanChoice} beats ${computerChoice}`);
        } else {
            console.log(`You lose! ${capitalizedComputerChoice} beats ${humanChoice}`);
        }
    }

    function displayGameWinner() {
        if (scores.humanScore === scores.computerScore) {
            console.log("Tie game!");
        } else if (scores.humanScore > scores.computerScore) {
            console.log("You win the game!");
        } else {
            console.log("You lose the game!");
        }
    }

    const scores = {
        humanScore: 0,
        computerScore: 0
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundWinner = playRound(humanChoice, computerChoice);
        displayRoundWinner(roundWinner, humanChoice, computerChoice);
    }

    displayGameWinner();
}

playGame();