function game() { 
  let playerWinCounter =5;
  let computerWinCounter = 5;

 

         //DISPLAY RESULT//
         const displayResult= document.querySelector('.result');
         displayResult.textContent = 'A wild COMPUTER appears! Choose your move and try to defeat it!';
   
         //DISPLAY LIVES//
         const displayPlayerLife = document.querySelector('.player-life');
         displayPlayerLife.textContent = `Player HP : ${playerWinCounter}`;
         const displayComputerLife = document.querySelector('.computer-life');
         displayComputerLife.textContent = `Computer HP : ${computerWinCounter}`;
  
      //CLICK PLAYER CHOICE SELECTION//
      const playerChoiceRock = document.querySelector('.ps-rock');
      const playerChoicePaper = document.querySelector('.ps-paper');
      const playerChoiceScissors = document.querySelector('.ps-scissors');

      //VS BLOCK
      const versusBlock = document.querySelector('.versus');
      versusBlock.textContent = 'VS';

      // if ((playerWinCounter = 0) || (computerWinCounter = 0)) {
      //   if (playerWinCounter > computerWinCounter) {
      //     displayResult.textContent = 'Game is over. You win!'
      //   } else {
      //     displayResult.textContent  = 'Game is over. Computer wins!'
      //   }
      // }
      
      // function playRounds() {
      playerChoiceRock.addEventListener('click', ()=> {
        
        console.log(playerWinCounter);
        console.log(computerWinCounter);
        compareChoices('rock', getComputerChoice());
        if ((playerWinCounter  == 0) || (computerWinCounter == 0)) {
          displayResult.textContent =  'GAME OVER. HERE RESULT GO';
        }
        
        // displayResult.textContent = `${playerWinCounter} : ${computerWinCounter}`;
        });

      playerChoicePaper.addEventListener('click', ()=> {
        compareChoices('paper', getComputerChoice());
        console.log(playerWinCounter);
        console.log(computerWinCounter); 
        if ((playerWinCounter  == 0) || (computerWinCounter == 0)) {
          displayResult.textContent =  'GAME OVER. HERE RESULT GO';
        }
        // displayResult.textContent = `${playerWinCounter} : ${computerWinCounter}`;
        });
      
      playerChoiceScissors.addEventListener('click', ()=> {
        compareChoices('scissors', getComputerChoice());
        console.log(playerWinCounter);
        console.log(computerWinCounter);     
        if ((playerWinCounter  == 0) || (computerWinCounter == 0)) {
          displayResult.textContent =  'GAME OVER. HERE RESULT GO';
        }   
        });
        

      //GET COMPUTER CHOICE//
      function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 100);
        let computerRandomChoice;
        if (randomNumber <= 33) {computerRandomChoice = 'rock'}
        else if (randomNumber > 33 && randomNumber < 66) {computerRandomChoice = 'paper'}
        else {computerRandomChoice = 'scissors'};
        return computerRandomChoice;
        } 
    
    //COMPARE CHOICES//    
    function compareChoices (playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
          displayResult.textContent = `Computer chose ${computerSelection.toUpperCase()}. I\'ts a DRAW!`;
          console.log(computerSelection);
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {                     
                --playerWinCounter;
                displayResult.textContent = 'Computer chose PAPER. Computer WINS!';
                displayPlayerLife.textContent = `${playerWinCounter}`;
                displayComputerLife.textContent = `${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                --computerWinCounter;
                displayResult.textContent = 'Computer chose SCISSORS. You WIN!';
                displayPlayerLife.textContent = `${playerWinCounter}`;
                displayComputerLife.textContent = `${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                --playerWinCounter;
                displayResult.textContent = 'Computer chose SCISSORS. Computer WINS!';
                displayPlayerLife.textContent = `${playerWinCounter}`;
                displayComputerLife.textContent = `${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                --computerWinCounter;
                displayResult.textContent = 'Computer chose ROCK. You WIN!';
                displayPlayerLife.textContent = `${playerWinCounter}`;
                displayComputerLife.textContent = `${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                --computerWinCounter;
                displayResult.textContent = 'Computer chose PAPER. You WIN!';
                displayPlayerLife.textContent = `${playerWinCounter}`;
                displayComputerLife.textContent = `${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                --playerWinCounter;
                displayResult.textContent = 'Computer chose ROCK. Computer WINS!';
                displayPlayerLife.textContent = `${playerWinCounter}`;
                displayComputerLife.textContent = `${computerWinCounter}`;
                console.log(computerSelection);
        } else {alert ('error'); 
        }                                                                          
    }
  }
 
                      
//     if (playerWinCounter > computerWinCounter) {
//         alert (`CONGRATULATIONS! YOU WIN!!! \n The final score is ${playerWinCounter} : ${computerWinCounter}`);
//     } else if (playerWinCounter < computerWinCounter) 
//         {alert (`COMPUTER WINS! :(\n The final score is ${playerWinCounter} : ${computerWinCounter}`);
//     } else { alert(`THE GAME RESULTED IN  A DRAW! \n The final score is ${playerWinCounter} : ${computerWinCounter}`); 
//     } 



game();
