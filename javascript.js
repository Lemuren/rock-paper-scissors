let playerScore = 0;
let computerScore = 0;
const outcomePar = document.querySelector('#outcome');


// Play a round when a button is clicked, with the appropriate player choice.
for (let button of document.querySelectorAll('button')) {
    button.addEventListener('click', () => playRound(button.id));
}

function getComputerChoice() {
    let r = Math.random() * 3;
    if (r < 1) return "rock";
    if (r < 2) return "paper";
    if (r < 3) return "scissors";
}


function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    // Set player and computer choice images.
    const playerChoiceImage   = document.querySelector('#playerChoice');
    const computerChoiceImage = document.querySelector('#computerChoice');
    playerChoiceImage.src = `img/${playerChoice}.gif`
    computerChoiceImage.src = `img/${computerChoice}.gif`

    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        outcomePar.textContent = 'You win! Rock beats Scissors!'
        playerScore++;
    }
    if (playerChoice == 'paper' && computerChoice == 'rock') {
        outcomePar.textContent = 'You win! Paper beats Rock!'
        playerScore++;
    }
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        outcomePar.textContent = 'You win! Scissors beats Paper!'
        playerScore++;
    }

    if (playerChoice == 'rock' && computerChoice == 'paper') {
        outcomePar.textContent = 'You lose! Paper beats rock!';
        computerScore++;
    }
    if (playerChoice == 'paper' && computerChoice == 'scissors') {
        outcomePar.textContent = 'You lose! Scissors beats paper!';
        computerScore++;
    }
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        outcomePar.textContent = 'You lose! Rock beats scissors!';
        computerScore++;
    }

    if (playerChoice == computerChoice) {
        outcomePar.textContent = 'It\'s a draw!';
    }
}
