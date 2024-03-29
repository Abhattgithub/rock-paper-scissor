function playGame(){
    for(let i = 0; i<5; i++){
        let playerChoice = getPlayerChoice(); 
        let computerChoice = getComputerChoice();
        console.log(`-Round ${i+1}-`);
        gameResult(computerChoice, playerChoice)
    }
}

//Randomly selects computers choice using Math.random
function getComputerChoice(){
    let choices = ["ROCK","PAPER","SCISSOR"]
    let computerChoice = Math.floor(Math.random()*3);
    return choices[computerChoice]
}

//Inputs player's choice using prompt
function getPlayerChoice(){
    let playerChoice = prompt("Enter your choice (Rock | Paper | Scissor)");
    playerChoice = playerChoice.toUpperCase()
    return playerChoice
}

//Comparing the player choice and computer's choice to see the result
function gameResult(computerChoice, playerChoice){
    if(playerChoice == computerChoice)
    console.log(`Player choice: ${playerChoice}
Computer choice: ${computerChoice}
Tie!!`)
else if(playerChoice=="ROCK"&&computerChoice=="PAPER" || playerChoice=="PAPER"&&computerChoice=="SCISSOR" ||playerChoice=="SCISSOR"&&computerChoice=="ROCK")
console.log(`Player choice: ${playerChoice}
Computer choice: ${computerChoice}
You lost!!`) 
else if(playerChoice=="ROCK"&&computerChoice=="SCISSOR" || playerChoice=="PAPER"&&computerChoice=="ROCK" ||playerChoice=="SCISSOR"&&computerChoice=="PAPER")
console.log(`Player choice: ${playerChoice}
Computer choice: ${computerChoice}
You Won!!`)
else
console.log("Try Again!!! Invalid Input ");
}
playGame()
