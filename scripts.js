function game() { 
  let playerWinCounter = 0;
  let computerWinCounter = 0;
  
//     while (gameCounter < 5) {
      // const computerChoice = getComputerChoice();
      // console.log(computerChoice);


      //CLICK PLAYER CHOICE SELECTION//
      const playerChoiceRock = document.querySelector('.ps-rock');
      const playerChoicePaper = document.querySelector('.ps-paper');
      const playerChoiceScissors = document.querySelector('.ps-scissors');

      //DISPLAY RESULT//
      const displayResult= document.querySelector('.result');
      displayResult.textContent = `${playerWinCounter} : ${computerWinCounter}`;

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
        displayResult.textContent = `${playerWinCounter} : ${computerWinCounter}`;
        });

    
      


      // let playerChoice = prompt('Pick ROCK, PAPER, OR SCISSORS');
      // playerChoice = playerChoice.toLowerCase();
                
      // playRound(playerChoice, computerChoice);

      function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 100);
        let computerRandomChoice;
        if (randomNumber <= 33) {computerRandomChoice = 'rock'}
        else if (randomNumber > 33 && randomNumber < 66) {computerRandomChoice = 'paper'}
        else {computerRandomChoice = 'scissors'};
        return computerRandomChoice;
        } 
    
    function playRound (playerSelection, computerSelection) {
        // if (playerSelection === 'rock' && computerSelection === 'rock') {
        //         // ++ gameCounter;
        //         // ++computerWinCounter ;
        //         // ++playerWinCounter;
        //         alert ('Computer chose ROCK. I\'ts a DRAW!');
        if (playerSelection === computerSelection) {
                alert (`Computer chose ${computerSelection.toUpperCase()}. I\'ts a DRAW!`);
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {                     
                ++computerWinCounter;
                alert ('Computer chose PAPER. Computer WINS!');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                ++playerWinCounter;
                alert ('Computer chose SCISSORS. You WIN!');
        // } else if (playerSelection  === 'paper' && computerSelection === 'paper') {
        //         //  ++ gameCounter;
        //         // ++computerWinCounter;
        //         // ++playerWinCounter;
        //         alert ('Computer chose PAPER. I\'ts a DRAW!');
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                ++computerWinCounter;
                alert ('Computer chose SCISSORS. Computer WINS!');
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                ++playerWinCounter;
                alert ('Computer chose ROCK. You WIN!');
        // } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        //         //  ++ gameCounter;
        //         // ++playerWinCounter;
        //         // ++computerWinCounter;
        //         alert ('Computer chose SCISSORS. I\'ts a DRAW!');
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                ++playerWinCounter;
                alert ('Computer chose PAPER. You WIN!');
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                ++computerWinCounter;
                alert ('Computer chose ROCK. Computer WINS!');
        } else {alert ("PLEASE ENTER ONE OF THE OPTIONS"); 
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
