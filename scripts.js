function game() { 
  let playerWinCounter = 5;
  let computerWinCounter = 5;
  
      //CLICK PLAYER CHOICE SELECTION//
      const playerChoiceRock = document.querySelector('.ps-rock');
      const playerChoicePaper = document.querySelector('.ps-paper');
      const playerChoiceScissors = document.querySelector('.ps-scissors');

      playerChoiceRock.addEventListener('click', ()=> {
        playRound('rock', getComputerChoice());
        console.log(playerWinCounter);
        console.log(computerWinCounter);
        displayResult.textContent = `${playerWinCounter} : ${computerWinCounter}`;
        });

      playerChoicePaper.addEventListener('click', ()=> {
        playRound('paper', getComputerChoice());
        console.log(playerWinCounter);
        console.log(computerWinCounter);
        displayResult.textContent = `${playerWinCounter} : ${computerWinCounter}`;
        });
      
      playerChoiceScissors.addEventListener('click', ()=> {
        playRound('scissors', getComputerChoice());
        console.log(playerWinCounter);
        console.log(computerWinCounter);
        
        });

      //DISPLAY RESULT//
      const displayResult= document.querySelector('.result');
      displayResult.textContent = `${playerWinCounter} : ${computerWinCounter}`;

      //DISPLAY LIVES//
      const displayPlayerLife = document.querySelector('.player-life');
      displayPlayerLife.textContent = `${playerWinCounter}`;
      const displayComputerLife = document.querySelector('.computer-life');
      displayComputerLife.textContent = `${computerWinCounter}`;

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
    function playRound (playerSelection, computerSelection) {
        // if (playerSelection === 'rock' && computerSelection === 'rock') {
        //         // ++ gameCounter;
        //         // ++computerWinCounter ;
        //         // ++playerWinCounter;
        //         alert ('Computer chose ROCK. I\'ts a DRAW!');
        if (playerSelection === computerSelection) {
          displayResult.textContent = `Computer chose ${computerSelection.toUpperCase()}. I\'ts a DRAW!`;
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {                     
                --computerWinCounter;
                displayResult.textContent = 'Computer chose PAPER. Computer WINS!';
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                --playerWinCounter;
                displayResult.textContent = 'Computer chose SCISSORS. You WIN!';
        // } else if (playerSelection  === 'paper' && computerSelection === 'paper') {
        //         //  ++ gameCounter;
        //         // ++computerWinCounter;
        //         // ++playerWinCounter;
        //         alert ('Computer chose PAPER. I\'ts a DRAW!');
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                --computerWinCounter;
                displayResult.textContent = 'Computer chose SCISSORS. Computer WINS!';
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                --playerWinCounter;
                displayResult.textContent = 'Computer chose ROCK. You WIN!';
        // } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        //         //  ++ gameCounter;
        //         // ++playerWinCounter;
        //         // ++computerWinCounter;
        //         alert ('Computer chose SCISSORS. I\'ts a DRAW!');
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                --playerWinCounter;
                displayResult.textContent = 'Computer chose PAPER. You WIN!';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                --computerWinCounter;
                displayResult.textContent = 'Computer chose ROCK. Computer WINS!';
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
