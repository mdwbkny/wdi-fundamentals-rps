function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
  
    if (playerMove === 'rock' && computerMove === 'scissors') { 
        winner = 'player'; 
    } else if (playerMove === 'rock' && computerMove === 'paper') { 
        winner = 'computer'; 
    } else if (playerMove === 'scissors' && computerMove === 'rock') { 
        winner = 'computer'; 
    } else if (playerMove === 'scissors' && computerMove === 'paper') { 
        winner = 'player'; 
    } else if (playerMove === 'paper' && computerMove === 'rock') { 
        winner = 'player'; 
    } else if (playerMove === 'paper' && computerMove === 'scissors') { 
        winner = 'computer'; 
    } else { 
        winner = 'tie'; 
    } 
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while ((playerWins < 5) && (computerWins < 5)) { 
        
        var playermove = getPlayerMove();
        var computermove = getComputerMove();
        var winner = getWinner(playermove,computermove);
        
        if (winner === 'player') { 
            playerWins +=1; 
            console.log( 'Player wins this round with ' + playermove + ' The computer lost this round with ' + computermove);
            console.log ('The score is currently ' + playerWins + ' to ' + computerWins)
        } else if ( winner === 'computer') { 
            computerWins +=1;
            console.log ( 'Sorry! the computer won this round with ' + computermove + ' Player chose ' + playermove );
            console.log ('The score is currently '  + playerWins + ' to ' + computerWins)
      } else { 
          console.log ('This round is a tie!');
          console.log (' The score is ' + playerWins + ' to ' + computerWins)
      }
    }
    return [playerWins, computerWins];
}
playToFive();