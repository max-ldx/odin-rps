const choices = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
};

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

function getHumanChoice() {
    return prompt('rock, paper or scissors?').toLowerCase();
}

function playGame() {
    const players = {
        human: 'human',
        computer: 'computer'
    };

    const scores = {
        humanScore: 0,
        computerScore: 0
    };

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            return null;
        } else if (humanChoice === choices.rock) {
            return computerChoice === choices.scissors ? players.human : players.computer;
        } else if (humanChoice === choices.paper) {
            return computerChoice === choices.rock ? players.human : players.computer;
        } else {
            return computerChoice === choices.paper ? players.human : players.computer;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundWinner = playRound(humanChoice, computerChoice);
        if (roundWinner === null) {
            console.log('Tie!');
        } else if (roundWinner === players.human) {
            scores.humanScore++;
            console.log(`You win: ${humanChoice} beats ${computerChoice}`);
        } else {
            scores.computerScore++;
            console.log(`You lose: ${computerChoice} beats ${humanChoice}`);
        }
    }

    if (scores.humanScore === scores.computerScore) {
        console.log('Game tie!');
    } else if (scores.humanScore > scores.computerScore) {
        console.log('You win the game!');
    } else {
        console.log('You lose the game!')
    }
}

playGame();