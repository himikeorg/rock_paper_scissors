
// 1. Function that returns either "rock," "paper," or "scissors."

function getComputerChoice() {
    if (Math.random() <= 0.33) {
        return "rock";
    } else if (Math.random() <= .66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// 2. Get user's input

function getHumanChoice() {
    return prompt("rock, paper, or scissors?");
}



// Currently updates the humanScore or computerScore depending on who wins. 
// But it console.logs them for now as a test. Figure out next steps.


// 5. Write the logic to play an entire game of 5 rounds

function playGame() {
// 3. Declare the players score variables

let humanScore = 0;
let computerScore = 0;

// 4. Write the logic to play a round

function playRound(humanChoice, computerChoice) {
     humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        humanScore += 1;
        console.log("You Win!");
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        return;
    } else if (humanChoice === computerChoice) {
        console.log("Tie!");
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        return;
    } else {
        computerScore += 1;
        console.log("You lose!");
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        return;
    }
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

}

playGame();