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

console.log(getComputerChoice());