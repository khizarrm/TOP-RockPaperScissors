// Rock-Paper-Scissors Game
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getUserChoice(){
  const userChoice = prompt("What is your choice? ");
  return userChoice.toLowerCase();
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
      return "It's a tie!";
  } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
      return `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
      return `You lose! ${computerChoice} beats ${userChoice}.`;
  }
}

function playGame(computerChoice, userChoice) {
  displayResults.innerText = "";
  displayResults.innerText += `Computer chose: ${computerChoice}\n`;
  displayResults.innerText += `You chose: ${userChoice}\n`;
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
}

let userChoice = "";
let computerChoice = "";
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
    userChoice = button.id;
    computerChoice = getComputerChoice();
    playGame(computerChoice, userChoice);
    displayResults.innerText += determineWinner(userChoice, computerChoice);
  })
})

const buttonContainer = document.querySelector(".buttons-container");
const displayResults = document.createElement("div");
displayResults.className = "results"; 
displayResults.innerText = "Play the game!\n";
buttonContainer.appendChild(displayResults);




  
