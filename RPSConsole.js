/*
1. Get computer choice
2. Get user choice
3. compare computer choice to user and print the results
4. Loop back to beginning for another round unless a keyword 'exit' is pressed
*/

let gameActive = true
let userScore
let compScore
let userChoice
let compChoice

while (gameActive) {
    console.log('Lets play Rock, Paper, Scissors!')

    compChoice = GetComputerChoice()
    userChoice = GetUserChoice()

    console.log(
        'Computer choice: ', compChoice, '\n',
        'User choice: ', userChoice, '\n',
    )

    CompareChoices(userChoice,compChoice)

    gameActive = prompt("Would you like to play again? [Y/N]").toLowerCase() 
        == 'n' ? True : false
}

function PlayRound(user, computer) {
    // TODO - Need to finish this game logic
}

function GetUserChoice() {
    let _userChoice
    while (true) {
        _userChoice = prompt("Your choice? [R/P/S]")

        switch (_userChoice.toLowerCase()) {
            case "r":
                _userChoice = 'Rock'
                break;
            case 'p':
                _userChoice = 'Paper'
                break;
            case 's':
                _userChoice = 'Scissors'
                break
            default:
                console.log('Invalid entry. Valid entries are [R/P/S]')
                continue;
        }
        break;
    }

    return _userChoice
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

function CompareChoices(user, comp) {
    if (comp == 'Paper') {
        if (user == 'Paper') {
            console.log("Tie!")
        } else if (user == 'Rock') {
            console.log('You Win!')
        } else if (user == 'Scissors') {
            console.log('You Lose!')
        }
    } else if (comp == 'Rock') {
        if (user == 'Rock') {
            console.log("Tie!")
        } else if (user == 'Paper') {
            console.log('You Win!')
        } else if (user == 'Scissors') {
            console.log('You Lose!')
        }
    } else if (comp == 'Scissors') {
        if (user == 'Scissors') {
            console.log("Tie!")
        } else if (user == 'Rock') {
            console.log('You Win!')
        } else if (user == 'Paper') {
            console.log('You Lose!')
        }
    }
}