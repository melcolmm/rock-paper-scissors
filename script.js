const btnRock = document.querySelector("btnRock");
const btnPaper = document.querySelector("btnPaper");
const btnScissors = document.querySelector("btnScissors");

let humanScore = 0;
let computerScore = 0;
let round = 0;

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

btnRock.addEventListener('click', () => {
    
});

function getHumanChoice() {
    let humanChoice = "";
    let valid = false;
    while (!valid) {
        humanChoice = prompt("Pick between the options: Rock, Paper or Scissors").toLowerCase();
        if ((humanChoice == "rock") || (humanChoice == "paper" ) || (humanChoice == "scissors")) {
            valid = true;
        }
    }
    
    console.log("Human picked " + humanChoice);
    return humanChoice;
}

function playGame() {
    

    function playRound(humanChoice, computerChoice) {

        console.log("The computer picked " + computerChoice);
    
        if (humanChoice == computerChoice) {
            console.log("You tied!")
        } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
            console.log("You win! Paper beats rock!");
            humanScore++;
        } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        console.log("");
    }



    // while (round < 5) {
    //     round++;
    //     console.log("ROUND " + round + ": FIGHT!");

    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice().toLowerCase();

    //     playRound(humanSelection, computerSelection);
    // }

    console.log("The final score is:");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else console.log("You lose!");
}

playGame();