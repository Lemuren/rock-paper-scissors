
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
