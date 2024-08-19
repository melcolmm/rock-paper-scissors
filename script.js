const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

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
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
}

btnRock.addEventListener('click', () => {
    let computerChoice = getComputerChoice().toLowerCase();
    if ((humanScore == 5) || (computerScore == 5)) {
        finalizeGame();
    } else playRound("rock", computerChoice);
});

btnPaper.addEventListener('click', () => {
    let computerChoice = getComputerChoice().toLowerCase();
    if ((humanScore == 5) || (computerScore == 5)) {
        finalizeGame();
    } else playRound("paper", computerChoice);
});

btnScissors.addEventListener('click', () => {
    let computerChoice = getComputerChoice().toLowerCase();
    if ((humanScore == 5) || (computerScore == 5)) {
        finalizeGame();
    } else playRound("scissors", computerChoice);
});

function finalizeGame() {
    console.log("The final score is:");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else console.log("You lose!");
    btnPaper.disabled = true;
    btnRock.disabled = true;
    btnScissors.disabled = true;
}