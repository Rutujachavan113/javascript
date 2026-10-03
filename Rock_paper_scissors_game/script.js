let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");

const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");


// Generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];
};


// Draw game
const drawGame = () => {
    console.log("Game is draw");

    msgPara.innerText = "Game is draw, play again";
    msgPara.style.backgroundColor = "black";
};


// Show winner
const showWinner = (userWin) => {

    if (userWin) {

        console.log("You win!");

        msgPara.innerText = "You win!";
        msgPara.style.backgroundColor = "green";

        userScore++;
        userScorePara.innerText = userScore;

    } else {

        console.log("You lose");

        msgPara.innerText = "You lose!";
        msgPara.style.backgroundColor = "red";

        compScore++;
        compScorePara.innerText = compScore;
    }
};


// Play game
const playGame = (userChoice) => {

    console.log("User choice:", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();

    console.log("Computer choice:", compChoice);


    // Check for draw
    if (userChoice === compChoice) {

        drawGame();

    } else {

        let userWin;

        if (userChoice === "rock") {

            userWin = compChoice === "scissors";

        } else if (userChoice === "paper") {

            userWin = compChoice === "rock";

        } else {

            userWin = compChoice === "paper";
        }

        showWinner(userWin);
    }
};


// Add click event to each choice
choices.forEach((choice, index) => {

    choice.addEventListener("click", () => {

        let userChoice;

        if (index === 0) {
            userChoice = "rock";
        } 
        else if (index === 1) {
            userChoice = "paper";
        } 
        else {
            userChoice = "scissors";
        }

        console.log("You selected:", userChoice);

        playGame(userChoice);
    });

});