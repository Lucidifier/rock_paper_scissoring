function game() { 
    let gameCounter = 0;
    let playerWinCounter = 0;
    let computerWinCounter = 0;
    
//     while (gameCounter < 5) {
        const computerChoice = getComputerChoice();
        console.log(computerChoice);

        let playerChoice;
        const playerChoiceRock = document.querySelector('.ps-rock');
        const playerChoicePaper = document.querySelector('.ps-paper');
        const playerChoiceScissors = document.querySelector('.ps-scissors');

        playerChoiceRock.addEventListener('click', ()=> {
          playRound('rock', computerChoice);
          });

        playerChoicePaper.addEventListener('click', ()=> {
          let playerChoice = 'paper';
          playRound(playerChoice, computerChoice);
          });
        
        playerChoiceScissors.addEventListener('click', ()=> {
          let playerChoice = 'scissors';
          playRound(playerChoice, computerChoice);
          });


        // let playerChoice = prompt('Pick ROCK, PAPER, OR SCISSORS');
        // playerChoice = playerChoice.toLowerCase();
                  
        // playRound(playerChoice, computerChoice);

        console.log(gameCounter) ;
        console.log(computerWinCounter);
        console.log(playerWinCounter);
    }  

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 100);
        let computerRandomChoice;
        if (randomNumber <= 33) {computerRandomChoice = 'rock'}
        else if (randomNumber > 33 && randomNumber < 66) {computerRandomChoice = 'paper'}
        else {computerRandomChoice = 'scissors'};
        return computerRandomChoice;
        } 

    function playRound (playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'rock') {
                // ++ gameCounter;
                // ++computerWinCounter ;
                // ++playerWinCounter;
                alert ('Computer chose ROCK. I\'ts a DRAW!');
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {                     
                // ++ gameCounter;
                // ++computerWinCounter;
                alert ('Computer chose PAPER. Computer WINS!');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                // ++ gameCounter;
                // ++playerWinCounter;
                alert ('Computer chose SCISSORS. You WIN!');
        // } else if (playerSelection  === 'paper' && computerSelection === 'paper') {
        //          ++ gameCounter;
        //         ++computerWinCounter;
        //         ++playerWinCounter;
        //         alert ('Computer chose PAPER. I\'ts a DRAW!');
        // } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        //          ++ gameCounter;
        //         ++computerWinCounter;
        //         alert ('Computer chose SCISSORS. Computer WINS!');
        // } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        //         ++ gameCounter;
        //         ++playerWinCounter;
        //         alert ('Computer chose ROCK. You WIN!');
        // } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        //          ++ gameCounter;
        //         ++playerWinCounter;
        //         ++computerWinCounter;
        //         alert ('Computer chose SCISSORS. I\'ts a DRAW!');
        // } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        //         ++ gameCounter;
        //         ++playerWinCounter;
        //         alert ('Computer chose PAPER. You WIN!');
        // } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        //         ++ gameCounter; 
        //         ++computerWinCounter;
        //         alert ('Computer chose ROCK. Computer WINS!');
        } else {alert ("PLEASE ENTER ONE OF THE OPTIONS"); 
        }                                                                          
    }
                          
//     if (playerWinCounter > computerWinCounter) {
//         alert (`CONGRATULATIONS! YOU WIN!!! \n The final score is ${playerWinCounter} : ${computerWinCounter}`);
//     } else if (playerWinCounter < computerWinCounter) 
//         {alert (`COMPUTER WINS! :(\n The final score is ${playerWinCounter} : ${computerWinCounter}`);
//     } else { alert(`THE GAME RESULTED IN  A DRAW! \n The final score is ${playerWinCounter} : ${computerWinCounter}`); 
//     } 


   
game();
