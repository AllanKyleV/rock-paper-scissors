function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const selectedChoice = choices[Math.floor(Math.random() * choices.length)];
    return selectedChoice;
}

function getHumanChoice() {
    let picked = prompt('Choose:');
    return picked;
}

function playRound(humanChoice, computerChoice, callback) {
    let scores = {
        humanScore: 0,
        computerScore: 0,
        tied: 0,
    };

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        scores.computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        scores.humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        scores.computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        scores.humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        scores.humanScore++;
    } else if (humanChoice === computerChoice) {
        scores.tied++;
    }

    console.log(`Human picked: ${humanChoice}`)
    console.log(`Computer Picked: ${computerChoice}`)

    callback(scores)
}

function roundResult(scores) {
    // const result = scores;
    if (scores.humanScore > scores.computerScore) {
        console.log('Human Wins!')
    } else if ((scores.humanScore < scores.computerScore) ) {
        console.log('Computer Wins!')
    } else {
        console.log('Draw!')
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection, roundResult);