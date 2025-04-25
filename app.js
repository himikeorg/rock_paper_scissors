
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

// function getHumanChoice() {
//     return prompt("rock, paper, or scissors?");
// }
const resultsDiv = document.createElement("div");
const body = document.querySelector("body");



body.appendChild(resultsDiv);

let humanChoice;



// Currently updates the humanScore or computerScore depending on who wins. 
// But it console.logs them for now as a test. Figure out next steps.


// 5. Write the logic to play an entire game of 5 rounds

// function playGame() {
// 3. Declare the players score variables

let humanScore = 0;
let computerScore = 0;

// 4. Write the logic to play a round

function playRound(humanChoice, computerChoice) {
     humanChoice = humanChoice.toLowerCase();

    if (humanScore === 5) {
        resultsDiv.textContent = "You won the game!"
    } else if (computerScore === 5) {
        resultsDiv.textContent = "The computer won the game!"
    } else {
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanScore += 1;
            resultsDiv.textContent = "You Win! --- Your score: " + humanScore + " --- Computer score: " + computerScore;
            return;
        } else if (humanChoice === computerChoice) {
            resultsDiv.textContent = "Tie! --- Your score: " + humanScore + " --- Computer score: " + computerScore;
            return;
        } else {
            computerScore += 1;
            resultsDiv.textContent = "You Lose! --- Your score: " + humanScore + " --- Computer score: " + computerScore;
            return;
        }
    }
}

// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());

// }

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
});





//playGame();