// Get computer's input
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const selectedChoice = choices[Math.floor(Math.random() * choices.length)];
    return selectedChoice;
}

// Get human's input
function getHumanChoice() {
    // Default pick
    const picked = 'paper';
    // const picked = prompt('Choose: rock, paper, or scissors');
    return picked;
}

function playGame() {
    // Scores
    let humanScore = 0;
    let computerScore = 0;

    // Play a round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('You lose! Paper beats Rock');
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win! Paper beats Rock');
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('You lose! Scissor beats Paper');
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win! Scissor beats Paper');
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win! Rock beats Scissors');
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log('Draw!');
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
    }
}

// Declaring function to the variable
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Tests
console.log(playGame())