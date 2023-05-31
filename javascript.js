function getComputerChoice() {
    let r = Math.random() * 3;
    if (r < 1) return "rock";
    if (r < 2) return "paper";
    if (r < 3) return "scissors";
}

function getPlayerSelection() {
    let choice = prompt("Enter choice: ");
    if (choice.toLowerCase() == 'rock') return 'rock';
    if (choice.toLowerCase() == 'paper') return 'paper';
    if (choice.toLowerCase() == 'scissors') return 'scissors';

    return playerSelection();
}

function playRound() {
    let playerChoice = getPlayerSelection();
    let computerChoice = getComputerChoice();

    if (playerChoice == 'rock' && computerChoice == 'scissors')
        return 'You win! Rock beats scissors!';
    if (playerChoice == 'paper' && computerChoice == 'rock')
        return 'You win! Paper beats rock!';
    if (playerChoice == 'scissors' && computerChoice == 'paper')
        return 'You win! Scissors beats paper!';

    if (playerChoice == 'rock' && computerChoice == 'paper')
        return 'You lose! Paper beats rock!';
    if (playerChoice == 'paper' && computerChoice == 'scissors')
        return 'You lose! Scissors beats paper!';
    if (playerChoice == 'scissors' && computerChoice == 'rock')
        return 'You lose! Rock beats scissors!';

    return 'Draw!';
}


function game() {
    let computerWins = 0;
    let playerWins = 0;

    for (let i = 0; i < 5; i++) {
        let str = playRound();
        console.log(str);
        if (str.substring(0, 7) == 'You win')
            playerWins++;
        else if (str.substring(0, 8) == 'You lose')
            computerWins++;
    }

    if (playerWins > computerWins)
        console.log('You won the game!');
    else if (computerWins > playerWins)
        console.log('You lost the game!');
    else
        console.log('The game is a draw!');
}

game();
