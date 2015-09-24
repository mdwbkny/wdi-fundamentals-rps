
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    if ((playerMove === 'rock') && (computerMove === 'paper')) {
    winner = 'computer';
    }
    else if ((playerMove === 'rock') && (computerMove === 'scissors')) {
    winner = 'player';
    }
    else if ((playerMove === 'paper') && (computerMove === 'rock')) {
    winner = 'player';
    }
    else if ((playerMove === 'paper') && (computerMove === 'scissors')) {
    winner = 'computer';
    }
    else if ((playerMove === 'scissors') && (computerMove === 'rock')) {
    winner = 'computer';
    }
    else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
    winner = 'player';
    }
    else if ((playerMove === 'rock') && (computerMove === 'rock')) {
    winner = 'tie';
    }
    else if ((playerMove === 'paper') && (computerMove === 'paper')) {
    winner = 'tie';
    }
    else if ((playerMove === 'scissors') && (computerMove === 'scissors')) {
    winner = 'tie';
    }
    else {
            winner = 'wrong value inputted';
    }
    return winner;
}

function playToFive() { 
console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    var playerMove;
    var computerMove;
    var winner;
    
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    winner = getWinner(playerMove,computerMove);
    
    console.log('playerMove is ' + playerMove);
    console.log('computerMove is ' + computerMove);
    console.log('winner is ' + winner);

for (i = 1; i <= 5; i += 1) {
    if (winner === 'player') {
        playerWins = playerWins + 1;
    }
    else if (winner === 'computer') {
        computerWins = computerWins +1;
    }
}
return [playerWins, computerWins];
}

playToFive();