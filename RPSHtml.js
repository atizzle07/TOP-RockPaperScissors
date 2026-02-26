const allButtons = Array.from(document.querySelectorAll('button'))
const rockSelectButton = document.getElementById('rock-btn');
const paperSelectButton = document.getElementById('paper-btn');
const scissorSelectButton = document.getElementById('scissors-btn');
const playRoundButton = document.getElementById('play-round-btn');
const clearScoresButton = document.getElementById('clear-scores')
const playAgainButton = document.getElementById('play-again-button')

const userSelection = document.getElementById('user-selection');
const compSelection = document.getElementById('computer-selection');
const roundResult = document.getElementById('round-result')
const playerScoreInput = document.getElementById('player-score-input')
const compScoreInput = document.getElementById('comp-score-input')
const gameOverLabel = document.getElementById('game-over-text')
const gameOverDiv = document.getElementById('game-over')

let playerScore = 0;
let compScore = 0;
let playerChoice
let compChoice


rockSelectButton.addEventListener('click', () => {
    compSelection.textContent = 'Computer Selected: '
    playerChoice = 'Rock'
    userSelection.textContent = `You Selected: ${playerChoice}`;
    playRoundButton.disabled = false;
})

paperSelectButton.addEventListener('click', () => {
    compSelection.textContent = 'Computer Selected: '
    playerChoice = 'Paper'
    userSelection.textContent = `You Selected: ${playerChoice}`;
    playRoundButton.disabled = false;

})

scissorSelectButton.addEventListener('click', () => {
    compSelection.textContent = 'Computer Selected: '
    playerChoice = 'Scissors'
    userSelection.textContent = `You Selected: ${playerChoice}`;
    playRoundButton.disabled = false;

})

playRoundButton.addEventListener('click', () => {
    compChoice = GetComputerChoice()
    compSelection.textContent = `Computer Selected: ${compChoice}`
    let result = PlayRound(playerChoice, compChoice)
    if (result === 'win') {
        playerScore += 1;
        playerScoreInput.value = playerScore;
        compScoreInput.value = compScore;
    } else if (result === 'lose') {
        compScore++;
        playerScoreInput.value = playerScore;
        compScoreInput.value = compScore;
    } else {
        playerScoreInput.value = playerScore;
        compScoreInput.value = compScore;
    }
    roundResult.textContent = `Result of round: ${result.toUpperCase()}`

    //disable Play Round Button until a user selection is made again
    playRoundButton.disabled = true;
    clearScoresButton.disabled = false;

    //check if game over
    if (playerScore === 5) {
        gameOverDiv.hidden = false;
        gameOverLabel.textContent = 'You Win!!!'
        for (button of allButtons) {
            if (button.id === 'play-again-button') {
                button.disabled = false
            } else {
                button.disabled = true;
            }
        }
    } else if (compScore === 5) {
        gameOverDiv.hidden = false;
        gameOverLabel.innerHTML = 'Sorry, Computer Wins'
        allButtons.disabled = true;
        for (button of allButtons) {
            if (button.id === 'play-again-button') {
                button.disabled = false
            } else {
                button.disabled = true;
            }
        }

    }
})

clearScoresButton.addEventListener('click', () => {
    playerScoreInput.value = 0;
    compScoreInput.value = 0;
    clearScoresButton.disabled = true;
})

playAgainButton.addEventListener('click', () => {
    ResetGame()
})

function PlayRound(player, comp) {
    let _player = player
    let _comp = comp
    return GetRoundResult(_player, _comp)
}

function GetComputerChoice() {
    let randNum = Math.random()
    let _compChoice

    if (randNum >= 0 && randNum <= 0.33) {
        _compChoice = "Rock"
    } else if (randNum > 0.33 && randNum <= 0.66) {
        _compChoice = "Paper"
    } else if (randNum > 0.66) {
        _compChoice = "Scissors"
    } else {
        _compChoice = "Error"
    }

    return _compChoice
}

function GetRoundResult(user, comp) {
    if (comp == 'Paper') {
        if (user == 'Paper') {
            return "tie"
        } else if (user == 'Rock') {
            return 'win'
        } else if (user == 'Scissors') {
            return 'lose'
        }
    } else if (comp == 'Rock') {
        if (user == 'Rock') {
            return "Tie"
        } else if (user == 'Paper') {
            return 'win'
        } else if (user == 'Scissors') {
            return 'lose'
        }
    } else if (comp == 'Scissors') {
        if (user == 'Scissors') {
            return "Tie"
        } else if (user == 'Rock') {
            return 'win'
        } else if (user == 'Paper') {
            return 'lose'
        }
    }
}

function ResetGame() {

    userSelection.textContent = `You Selected:`;
    compSelection.textContent = `Computer Selected:`;
    playerScore = 0;
    compScore = 0;
    playerChoice = ''
    compChoice = ''
    roundResult.textContent = `Result of round:`
    compScoreInput.value = 0;
    playerScoreInput.value = 0;

    for (button of allButtons) {
        if (button.id === 'play-again-button') {
            button.disabled = true
        } else {
            button.disabled = false;
        }
    }
}