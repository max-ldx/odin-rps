const choices = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
};

const scores = {
    humanScore: 0,
    computerScore: 0
};

function getComputerChoice() {
    const rand = Math.random();
    if (rand <= 1 / 3) {
        return choices.rock;
    } else if (rand <= 2 / 3) {
        return choices.paper
    } else {
        return choices.scissors;
    }
}

function getHumanChoice() {
    return prompt('rock, paper or scissors?').toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log('Tie!');
    } else if (humanChoice === choices.rock) {
        if (computerChoice === choices.scissors) {
            console.log('You win! Rock beats scissors');
        } else {
            console.log('You lose! Paper beats rock');
        }
    } else if (humanChoice === choices.paper) {
        if (computerChoice === choices.rock) {
            console.log('You win! Paper beats rock');
        } else {
            console.log('You lose! Scissors beats paper');
        }
    } else {
        if (computerChoice === choices.paper) {
            console.log('You win! Scissors beats paper');
        } else {
            console.log('You lose! Rock beats scissors');
        }
    }
}