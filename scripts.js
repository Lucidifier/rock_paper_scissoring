function game() { 
  let playerWinCounter =5;
  let computerWinCounter = 5;

 

         //DISPLAY RESULT//
         const displayResult= document.querySelector('.result');
         displayResult.textContent = 'A wild COMPUTER appears! Choose your move!';
         displayResult.style.fontFamily = '"Courier New", monospace';
         displayResult.style.fontSize  = '30px';
         displayResult.style.color = 'white';
         displayResult.style.textAlign = 'center';
         displayResult.style.lineHeight = '50px';
         displayResult.style.cursor = 'default';
         displayResult.style.userSelect = 'none';
   
         //DISPLAY LIVES//
         const displayPlayerLife = document.querySelector('.player-life');
         displayPlayerLife.textContent = `Player HP : ${playerWinCounter}`;
         displayPlayerLife.style.fontFamily = '"Courier New", monospace';
         displayPlayerLife.style.fontSize  = '22px';
         displayPlayerLife.style.color = 'white';
         displayPlayerLife.style.textAlign = 'center';
         displayPlayerLife.style.lineHeight = '75px';
         displayPlayerLife.style.cursor = 'default';
         displayPlayerLife.style.userSelect = 'none';

         const displayComputerLife = document.querySelector('.computer-life');
         displayComputerLife.textContent = `Computer HP : ${computerWinCounter}`;
         displayComputerLife.style.fontFamily = '"Courier New", monospace';
         displayComputerLife.style.fontSize  = '22px';
         displayComputerLife.style.color = 'white';
         displayComputerLife.style.textAlign = 'center';
         displayComputerLife.style.lineHeight = '75px';
         displayComputerLife.style.cursor = 'default';
         displayComputerLife.style.userSelect = 'none';
  
      //CLICK PLAYER CHOICE SELECTION//
      const playerChoiceRock = document.querySelector('.ps-rock');
      playerChoiceRock.textContent = 'ROCK';
      playerChoiceRock.style.fontFamily = '"Brush Script MT", cursive';
      playerChoiceRock.style.color = 'white';
      playerChoiceRock.style.textAlign = 'center';
      playerChoiceRock.style.lineHeight = '55px';
      playerChoiceRock.style.cursor = 'default';
      playerChoiceRock.style.userSelect = 'none';

      const playerChoicePaper = document.querySelector('.ps-paper');
      playerChoicePaper.textContent = 'PAPER';
      playerChoicePaper.style.fontFamily = '"Brush Script MT", cursive';
      playerChoicePaper.style.color = 'white';
      playerChoicePaper.style.textAlign = 'center';
      playerChoicePaper.style.lineHeight = '55px';
      playerChoicePaper.style.cursor = 'default';
      playerChoicePaper.style.userSelect = 'none';

      const playerChoiceScissors = document.querySelector('.ps-scissors');
      playerChoiceScissors.textContent = 'SCISSORS';
      playerChoiceScissors.style.fontFamily = '"Brush Script MT", cursive';
      playerChoiceScissors.style.color = 'white';
      playerChoiceScissors.style.textAlign = 'center';
      playerChoiceScissors.style.lineHeight = '55px';
      playerChoiceScissors.style.cursor = 'default';
      playerChoiceScissors.style.userSelect = 'none';


      //VS BLOCK
      const versusBlock = document.querySelector('.versus');
      versusBlock.textContent = 'VS';
      versusBlock.style.fontFamily = '"Courier New", monospace';
      versusBlock.style.fontSize  = '120px';
      versusBlock.style.color = '#cc6600';
      versusBlock.style.textAlign = 'center';
      versusBlock.style.cursor = 'default';
      versusBlock.style.userSelect = 'none';

      const playerChoiceContainer = document.querySelector ('.container-selection');

      const playAgain = document.querySelector('.play-again-button');
      playAgain.addEventListener('click', resetGame);

      function resetGame() {
        playerWinCounter =5;
        computerWinCounter = 5;
        displayResult.textContent = 'A wild COMPUTER appears! Choose your move!';
        displayPlayerLife.textContent = `Player HP : ${playerWinCounter}`;
        displayComputerLife.textContent = `Computer HP : ${computerWinCounter}`;
        playerChoiceContainer.classList.remove('container-selection--disabled');
        playAgain.style.display = 'none';
        console.log('bruh');
      }


      function checkEndResult() {
         if ((playerWinCounter  <= 0) || (computerWinCounter <= 0)) {
          if (playerWinCounter > computerWinCounter) {
          displayResult.textContent =  'You have defeated COMPUTER!';
          playerChoiceContainer.classList.add('container-selection--disabled');
          playAgain.style.display = 'block';

        } else {
          displayResult.textContent =  'You have been defeated :('
          playerChoiceContainer.classList.add('container-selection--disabled');
          playAgain.style.display = 'block';
        }
      }
      }

      playerChoiceRock.addEventListener('click', ()=> {
        
        console.log(playerWinCounter);
        console.log(computerWinCounter);
        compareChoices('rock', getComputerChoice());
        checkEndResult();
        
        // displayResult.textContent = `${playerWinCounter} : ${computerWinCounter}`;
        });

      playerChoicePaper.addEventListener('click', ()=> {
        compareChoices('paper', getComputerChoice());
        console.log(playerWinCounter);
        console.log(computerWinCounter); 
        checkEndResult();
        // displayResult.textContent = `${playerWinCounter} : ${computerWinCounter}`;
        });
      
      playerChoiceScissors.addEventListener('click', ()=> {
        compareChoices('scissors', getComputerChoice());
        console.log(playerWinCounter);
        console.log(computerWinCounter);     
        checkEndResult(); 
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
          displayResult.textContent = `Computer chose ${computerSelection.toUpperCase()}. It\'s a DRAW!`;
          console.log(computerSelection);
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {                     
                --playerWinCounter;
                displayResult.textContent = 'Computer chose PAPER. Computer WINS!';
                displayPlayerLife.textContent = `Player HP : ${playerWinCounter}`;
                displayComputerLife.textContent = `Computer HP : ${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                --computerWinCounter;
                displayResult.textContent = 'Computer chose SCISSORS. You WIN!';
                displayPlayerLife.textContent = `Player HP : ${playerWinCounter}`;
                displayComputerLife.textContent = `Computer HP : ${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                --playerWinCounter;
                displayResult.textContent = 'Computer chose SCISSORS. Computer WINS!';
                displayPlayerLife.textContent = `Player HP : ${playerWinCounter}`;
                displayComputerLife.textContent = `Computer HP : ${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                --computerWinCounter;
                displayResult.textContent = 'Computer chose ROCK. You WIN!';
                displayPlayerLife.textContent = `Player HP : ${playerWinCounter}`;
                displayComputerLife.textContent = `Computer HP : ${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                --computerWinCounter;
                displayResult.textContent = 'Computer chose PAPER. You WIN!';
                displayPlayerLife.textContent = `Player HP : ${playerWinCounter}`;
                displayComputerLife.textContent = `Computer HP : ${computerWinCounter}`;
                console.log(computerSelection);
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                --playerWinCounter;
                displayResult.textContent = 'Computer chose ROCK. Computer WINS!';
                displayPlayerLife.textContent = `Player HP : ${playerWinCounter}`;
                displayComputerLife.textContent = `Computer HP : ${computerWinCounter}`;
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
