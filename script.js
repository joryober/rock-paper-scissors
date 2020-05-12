let computerPlay = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

let playRound = (playerSelection, computerSelection) => {
    let winMap = {
        paper: 'rock',
        rock: 'scissors',
        scissors: 'paper'
    }
    if (Object.values(winMap).includes(playerSelection.toLowerCase()) === false) {
        alert ('Invalid selection. Please try again.')
    } else if (winMap[playerSelection.toLowerCase()] === computerSelection.toLowerCase()) {
        alert (`You win! ${playerSelection} beats ${computerSelection}`);
        return 'W'
    } else if (winMap[computerSelection.toLowerCase()] === playerSelection.toLowerCase()) {
        alert (`You lose! ${computerSelection} beats ${playerSelection}`);
        return 'L'
    } else {
        alert (`Tie! Both players chose ${computerSelection}`);
        return 'T'
    }
}

// let check = 'Y'
// while (check !== 'N') {
//     alert(playRPS(prompt('Enter your RPS choice: '), computerPlay()));
//     check = prompt('Play again? Y/N')
//     while(['Y', 'N'].includes(check) === false) {
//         alert('Invalid selection. Please try again.');
//         check = prompt('Play again? Y/N')
//     }
// }

let game = () => {
    let result;
    let playerWins = 0;
    let computerWins = 0;
    for (let i=0; i<5; i++) {
        result = playRound(prompt('Enter your RPS choice: '), computerPlay())
        if (!result) {
            i--;
            continue;
        }
        switch(result) {
            case 'W': 
                playerWins++;
                break;
            case 'L':
                computerWins++;
                break;
            case 'T':
                break;
        }
    }

    alert(`Final score: Player: ${playerWins}, Computer: ${computerWins}`)
    if (playerWins > computerWins) alert('Player wins!')
    else if (computerWins > playerWins) alert('Computer wins!')
    else alert('Tie!')
}

game();


