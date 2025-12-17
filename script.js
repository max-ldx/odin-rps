const choices = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
};

const players = {
    human: 'human',
    computer: 'computer'
};

const scores = {
    humanScore: 0,
    computerScore: 0
};

const scoresDiv = document.querySelector('#scores');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

function onRockClicked() {
    playRound(choices.rock, getComputerChoice());
}

function onPaperClicked() {
    playRound(choices.paper, getComputerChoice());
}

function onScissorsClicked() {
    playRound(choices.scissors, getComputerChoice());
}

rockButton.addEventListener('click', onRockClicked);
paperButton.addEventListener('click', onPaperClicked);
scissorsButton.addEventListener('click', onScissorsClicked);

function getComputerChoice() {
    const rand = Math.random();
    if (rand < 1 / 3) {
        return choices.rock;
    } else if (rand < 2 / 3) {
        return choices.paper
    } else {
        return choices.scissors;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    updateScore(humanChoice, computerChoice);
    const winner = tryGetWinner();
    if (winner !== null) {
        displayWinner(winner);
        removeEventListeners();
    } else {
        displayScore();
    }
}

function updateScore(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return;

    if (humanChoice === choices.rock) {
        if (computerChoice === choices.paper) {
            scores.computerScore++;
        } else {
            scores.humanScore++;
        }
    } else if (humanChoice === choices.paper) {
        if (computerChoice === choices.scissors) {
            scores.computerScore++;
        } else {
            scores.humanScore++;
        }
    } else {
        if (computerChoice === choices.rock) {
            scores.computerScore++;
        } else {
            scores.humanScore++;
        }
    }
}

function displayScore() {
    scoresDiv.textContent = `Scores: you ${scores.humanScore} VS computer ${scores.computerScore}`;
}

function tryGetWinner() {
    if (scores.humanScore === 5) {
        return players.human;
    } else if (scores.computerScore === 5) {
        return players.computer;
    } else {
        return null;
    }
}

function displayWinner(winner) {
    if (winner === players.human) {
        scoresDiv.textContent = 'You win the game!';
    } else {
        scoresDiv.textContent = 'You lose the game!';
    }
}

function removeEventListeners() {
    rockButton.removeEventListener('click', onRockClicked);
    paperButton.removeEventListener('click', onPaperClicked);
    scissorsButton.removeEventListener('click', onScissorsClicked);
}