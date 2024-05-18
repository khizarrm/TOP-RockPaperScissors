// Rock-Paper-Scissors Game

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function getUserChoice(){
    const userChoice = prompt("What is your choice? ").toLowerCase();
    return userChoice; 
  }
  
  // Function to determine the winner
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
  
  // Function to play the game
  function playGame() {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
  }
  
  // Example of how to play the game
  const userChoice = 'rock'; // Change this to 'rock', 'paper', or 'scissors'
  playGame(userChoice);