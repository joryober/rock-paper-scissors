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
        // alert ('Invalid selection. Please try again.')
    } else if (winMap[playerSelection.toLowerCase()] === computerSelection.toLowerCase()) {
        // alert (`You win! ${playerSelection} beats ${computerSelection}`);
        return 'W'
    } else if (winMap[computerSelection.toLowerCase()] === playerSelection.toLowerCase()) {
        // alert (`You lose! ${computerSelection} beats ${playerSelection}`);
        return 'L'
    } else {
        // alert (`Tie! Both players chose ${computerSelection}`);
        return 'T'
    }
}

// let game = () => {
//     let result;
//     let playerWins = 0;
//     let computerWins = 0;
//     for (let i=0; i<5; i++) {
//         result = playRound(prompt('Enter your RPS choice: '), computerPlay())
//         if (!result) {
//             i--;
//             continue;
//         }
//         switch(result) {
//             case 'W': 
//                 playerWins++;
//                 break;
//             case 'L':
//                 computerWins++;
//                 break;
//             case 'T':
//                 break;
//         }
//     }

//     alert(`Final score: Player: ${playerWins}, Computer: ${computerWins}`)
//     if (playerWins > computerWins) alert('Player wins!')
//     else if (computerWins > playerWins) alert('Computer wins!')
//     else alert('Tie!')
// }

// game();

let textResults = document.createElement('h4');
let numResults = document.createElement('h3');
let results = document.querySelector('div');
let playerWins = 0;
let computerWins = 0;
let gameCount = 0;
let choices = document.createElement('h4');
choices.style.cssText = 'color: red';
let playAgain = document.createElement('h5');
playAgain.textContent = 'Play again?';
let playAgainLink = document.createElement('a');
playAgainLink.href = '';
numResults.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;
results.appendChild(numResults);
let com;


let btns = document.querySelectorAll('button');
btns.forEach(button => {
    button.addEventListener('click', () => {
        switch(playRound(button.textContent, com = computerPlay())){
            case 'W':
                if(!(playerWins === 5 || computerWins === 5)){
                    playerWins++;
                    numResults.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;
                    results.appendChild(numResults);
                    choices.textContent = `You chose ${button.textContent}, computer chose ${com}`;
                    results.appendChild(choices);
                    textResults.textContent = `You won!`;
                    results.appendChild(textResults);
                }
                break;
            case 'L':
                if(!(playerWins === 5 || computerWins === 5)){
                    computerWins++;
                    numResults.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;
                    results.appendChild(numResults);
                    choices.textContent = `You chose ${button.textContent}, computer chose ${com}`;
                    results.appendChild(choices);
                    textResults.textContent = 'You lost.'
                    results.appendChild(textResults);
                }
                break;
            case 'T':
                if(!(playerWins === 5 || computerWins === 5)){
                    numResults.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;
                    results.appendChild(numResults);
                    choices.textContent = `You chose ${button.textContent}, computer chose ${com}`;
                    results.appendChild(choices);
                    textResults.textContent = `Tie.`;
                    results.appendChild(textResults);
                }
                break;
        }
        if(playerWins === 5){
            textResults.textContent = `Player Wins!`;
            results.appendChild(textResults);
        } else if(computerWins === 5){
            textResults.textContent = `Computer Wins!`;
            results.appendChild(textResults);
        }
        if (playerWins === 5 || computerWins === 5){
            playAgainLink.appendChild(playAgain)
            results.appendChild(playAgainLink);
        }
    }
    )
}
)
    


