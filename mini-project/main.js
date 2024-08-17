let userScore = 0;
let compScore = 0;
// Use querySelectorAll to select all elements with the class ".choice"
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// genrate computer choice using class of math inside function
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];//rock paper secior
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//function to create to draw a game
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";//to show on main screen where it written play game
  msg.style.backgroundColor = "#081b31";
};

//function to creeate who wins
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;//to show on main screen where it written play game
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;//to show on main screen where it written play game
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;//agr computer ki choice paper  thi to user jeet gya nhi to nhi jeeta
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;// genrate comp choice
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);//to call out function showWinner
  }
};

// Add an event listener to each ".choice" element har ek individual score
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");//it print what u choose rock,paper sesior
    playGame(userChoice);//calling userchoice
  });
});