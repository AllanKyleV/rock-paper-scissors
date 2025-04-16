// Get computer's input
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const selectedChoice = choices[Math.floor(Math.random() * choices.length)];
    return selectedChoice;
}

// Get human's input
function getHumanChoice() {
    // Default pick
    // const picked = 'Paper'.toLowerCase();
    const picked = prompt('Choose: rock, paper, or scissors').toLowerCase();
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
            console.log('You lose! Scissors beats Paper');
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win! Scissors beats Paper');
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win! Rock beats Scissors');
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log('Draw!');
        }
    }

    // Play 5 round
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    // Determine the winner
    let stats;

    if (humanScore > computerScore) {
        stats = 'win';
    } else if (humanScore < computerScore) {
        stats = 'lose';
    } else {
        stats = 'score tied'
    };

    let result = `Your score is: ${humanScore},\nComputer's score is: ${computerScore}\nYou ${stats}!`
    console.log(result)
    
}

// Tests | Call
playGame()