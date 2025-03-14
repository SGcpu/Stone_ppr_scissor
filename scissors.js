let user_score = 0;
let computer_score = 0;
let msgbtn = document.querySelector(".msg_box");
let user_scored = document.querySelector("#user_scored");
let computer_scored = document.querySelector("#computer_scored");

const choices = document.querySelectorAll(".images_box");

const genComputerChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const playGame = (userChoice, compchoice) => {
    console.log("User choice:", userChoice);
    console.log("Computer choice:", compchoice);
};

function resetGame() {
    user_score = 0;
    computer_score = 0;
    user_scored.innerText = user_score;
    computer_scored.innerText = computer_score;
    msgbtn.textContent = "Pick your move!";
}

function drawgame() {
    console.log("The Game is drawn");
    msgbtn.textContent = "It's a Draw! Click to Reset";
    msgbtn.addEventListener("click", resetGame);
}

const showwinner = (userWin) => {
    if (userWin) {
        console.log("You Win");
        msgbtn.textContent = "You Win! Click to Reset";
        user_score++;
        user_scored.innerText = user_score;
    } else {
        console.log("You Lose");
        msgbtn.textContent = "You Lose! Click to Reset";
        computer_score++;
        computer_scored.innerText = computer_score;
    }
    msgbtn.addEventListener("click", resetGame);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compchoice = genComputerChoice();
        playGame(userChoice, compchoice);

        if (userChoice === compchoice) {
            drawgame();
        } else {
            let userWin = true;
            if (userChoice === "stone") {
                userWin = compchoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compchoice === "scissors" ? false : true;
            } else {
                userWin = compchoice === "stone" ? false : true;
            }
            showwinner(userWin);
        }
    });
});
