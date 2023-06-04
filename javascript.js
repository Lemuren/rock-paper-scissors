let playerScore = 0;
let computerScore = 0;
const outcomePar = document.querySelector('#outcome');


// Play a round when a button is clicked, with the appropriate player choice.
const buttons = document.querySelectorAll('.buttons button');
for (let button of buttons) {
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
        setPlayerScore(playerScore + 1);
    }
    if (playerChoice == 'paper' && computerChoice == 'rock') {
        outcomePar.textContent = 'You win! Paper beats Rock!'
        setPlayerScore(playerScore + 1);
    }
    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        outcomePar.textContent = 'You win! Scissors beats Paper!'
        setPlayerScore(playerScore + 1);
    }

    if (playerChoice == 'rock' && computerChoice == 'paper') {
        outcomePar.textContent = 'You lose! Paper beats rock!';
        setComputerScore(computerScore + 1);
    }
    if (playerChoice == 'paper' && computerChoice == 'scissors') {
        outcomePar.textContent = 'You lose! Scissors beats paper!';
        setComputerScore(computerScore + 1);
    }
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        outcomePar.textContent = 'You lose! Rock beats scissors!';
        setComputerScore(computerScore + 1);
    }

    if (playerChoice == computerChoice) {
        outcomePar.textContent = 'It\'s a draw!';
    }

    if (playerScore + computerScore == 5)
        endGame();
}

function endGame() {
    const winnerArea = document.querySelector('.winner-box');
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.addEventListener('click', resetGame);
    const buttonImage = document.createElement('img');
    buttonImage.src = 'img/replay.gif';
    button.appendChild(buttonImage);

    if (playerScore > computerScore)
        p.textContent = 'PLAYER WINS';
    if (playerScore < computerScore)
        p.textContent = 'COMPUTER WINS';
    if (playerScore == computerScore)
        p.textContent = 'DRAW';

    
    for (let button of buttons) {
        button.disabled = true;
    }

    winnerArea.appendChild(p);
    winnerArea.appendChild(button);

}



function resetGame() {
    setComputerScore(0);
    setPlayerScore(0);
    
    const winnerArea = document.querySelector('.winner-box');
    const playArea = document.querySelector('#outcome');
    document.querySelector("#playerChoice").src = 'img/nochoice.gif';
    document.querySelector("#computerChoice").src = 'img/nochoice.gif';
    playArea.textContent = '';
    while (winnerArea.lastChild)
        winnerArea.removeChild(winnerArea.lastChild);
    for (let button of buttons)
        button.disabled = false;
}

function setPlayerScore(score) {
    playerScore = score;
    document.querySelector('#playerScore').textContent = `Score: ${playerScore}`;
}

function setComputerScore(score) {
    computerScore = score;
    document.querySelector('#computerScore').textContent = `Score: ${computerScore}`;
}
