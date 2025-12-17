const choices = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
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