let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (human, computer, target) => {
  if(human > 9 || human < 0){
    alert("Your chosen number is outside the range! You lose!");
  } else {
    const humanGuess = getAbsoluteDistance(human, target);
    const computerGuess = getAbsoluteDistance(computer, target);
    return humanGuess <= computerGuess;
  }
}

const updateScore = winner => {
  if(winner === 'human'){
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
