let options = ['rock', 'paper', 'scissors'];
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
let scoreboard = [0,0,0];
const scoreText = document.querySelector('.results');
const topText = document.querySelector('.textTop')


function playRound(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
            if (computerChoice == options[0]) {
                return ['It\'s a tie: both player chose ' + playerChoice, 2]
            }
            if (computerChoice == options[1]) {
                return ['You lose!: ' + computerChoice + ' beats ' + playerChoice, 1]
            }
            return ['You win!: ' + playerChoice + ' beats ' + computerChoice, 0]

        case 'paper':
            if (computerChoice == options[0]) {
                return ['You win!: ' + playerChoice + ' beats ' + computerChoice, 0]
            }
            if (computerChoice == options[1]) {
                return ['It\'s a tie: both player chose ' + playerChoice, 2]
            }
            return ['You lose!: ' + computerChoice + ' beats ' + playerChoice, 1]

        case 'scissors':
            if (computerChoice == options[0]) {
                return ['You lose!: ' + computerChoice + ' beats ' + playerChoice, 1]
            }
            if (computerChoice == options[1]) {
                return ['You win!: ' + playerChoice + ' beats ' + computerChoice, 0]
            }
            return ['It\'s a tie: both player chose ' + playerChoice, 2]
        default: 'tie'
            return 'Unvalid choice!';
    }
}

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}

function updateScoreboard(scoreType){
    scoreboard[scoreType[1]]++

    if(scoreboard[0]<5 && scoreboard[1]<5){
        topText.textContent = scoreType[0];

        scoreText.textContent = 'Wins: ' + scoreboard[0] +
                                ' Loses: '+ scoreboard[1]+
                                ' Ties: '+ scoreboard[2];

    } else {
        if(scoreboard[0]==5){
            topText.textContent = 'Congratulations! You Won';
        } else {
            topText.textContent = 'Too bad! You Lost';
        }
        scoreText.textContent = 'Wins: ' + scoreboard[0] +
                                ' Loses: '+ scoreboard[1]+
                                ' Ties: '+ scoreboard[2];
        scoreboard = [0,0,0];
    }
    return;
}

rockButton.addEventListener('click', ()=>{
    updateScoreboard(playRound('rock',getComputerChoice()));
});

paperButton.addEventListener('click', ()=>{
    updateScoreboard(playRound('paper',getComputerChoice()));
});

scissorsButton.addEventListener('click', ()=>{
    updateScoreboard(playRound('scissors',getComputerChoice()));
});
