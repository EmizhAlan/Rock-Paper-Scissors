function getComputerChoice() {
    
    let Choice = Math.floor(Math.random() * 3)

    if (Choice == 0) {
        console.log('Computer: Rock')
        return('Rock')
    }
    else if (Choice == 1) {
        console.log('Computer: Paper')
        return('Paper')
    }
    else if (Choice == 2) {
        console.log('Computer: Scissors')
        return('Scissors')
    }

    
    console.log(Choice)
}

while (true) {
    const playerSelection = prompt().toLowerCase();
    console.log('Player: ' + playerSelection)
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
}

const playerSelection = prompt().toLowerCase();
console.log('Player: ' + playerSelection)
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === 'rock') {
        if (computerSelection === "Rock") {
            return "Draw!";
        } else if (computerSelection === "Paper") {
            return "Computer wins!";
        } else {
            return "User wins!";
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === "Rock") {
            return "User wins!";
        } else if (computerSelection === "Paper") {
            return "Draw";
        } else {
            return "Computer wins!";
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === "Rock") {
            return "Computer wins!";
        } else if (computerSelection === "Paper") {
            return "User wins!";
        } else {
            return "Draw";
        }
    }
    else {
        console.log("error")
    }
  }
   
 



