let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            return "Rock";
            break;
        case 2: 
            return "Paper";
            break;
        case 3:
            return "Scissors";
    }
}

function getHumanChoice() {
    return prompt("Pick between the options: Rock, Paper or Scissors");
    // let humanChoice = prompt("Pick between the options: Rock, Paper or Scissors");
    // if ((humanChoice == "Rock") || (humanChoice == "Scissors") || (humanChoice == "Paper")) {
    //     return humanChoice;
    // } else {
    //     getHumanChoice();
    // }
}

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice == computerChoice.toLowerCase()) {
        console.log("You tied!")
    } else if ((humanChoice == "rock") && (computerChoice.toLowerCase() == "scissors")) {
        console.log("You win! Rock beats scissors!")
    } else if ((humanChoice == "paper") && (computerChoice.toLowerCase() == "rock")) {
        console.log("You win! Paper beats rock!")
    } else if ((humanChoice == "scissors") && (computerChoice.toLowerCase() == "paper")) {
        console.log("You win! Scissors beats paper!")
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);