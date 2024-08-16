let playerChoiceStone = document.querySelector("#stoneBtn");
let playerChoicePaper = document.querySelector("#paperBtn");
let playerChoiceScissor = document.querySelector("#scissorBtn");
let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

let displayRoundNumber = document.querySelector("#displayRoundNumber")
let displayRoundWinner = document.querySelector("#displayRoundWinner")
let displayPlayerChoice = document.querySelector("#displayPlayerChoice")
let displayPlayerScore = document.querySelector("#displayPlayerScore")
let displayComputerChoice = document.querySelector("#displayComputerChoice")
let displayComputerScore = document.querySelector("#displayComputerScore")



playerChoiceStone.addEventListener("click", ()=> {
    playerChoice = "ROCK"
    playGame()
} )
playerChoicePaper.addEventListener("click", ()=> {
    playerChoice = "PAPER"
    playGame()
} )
playerChoiceScissor.addEventListener("click", ()=> {
    playerChoice = "SCISSOR"
    playGame()
} )


 async function playGame(){
    await GamepadButton
    computerChoice = getComputerChoice();
    roundNumber++;
    if(playerChoice != "FALSE")
        gameResult(computerChoice, playerChoice)
    
    
}

//Randomly selects computers choice using Math.random
function getComputerChoice(){
    let choices = ["ROCK","PAPER","SCISSOR"]
    computerChoice = Math.floor(Math.random()*3);
    return choices[computerChoice]
}

//Comparing the player choice and computer's choice to see the result
function gameResult(computerChoice, playerChoice){
    displayRoundNumber.innerHTML = roundNumber
    if(computerScore < 5 && playerScore < 5){
    if(playerChoice == computerChoice){
        result = "TIE"
        updateBoard()
        playGame()
    }
    else if(playerChoice=="ROCK"&&computerChoice=="PAPER" || playerChoice=="PAPER"&&computerChoice=="SCISSOR" ||playerChoice=="SCISSOR"&&computerChoice=="ROCK"){
        result = "YOU LOST"
        computerScore++
        updateBoard()
        playGame()
    }
    else if(playerChoice=="ROCK"&&computerChoice=="SCISSOR" || playerChoice=="PAPER"&&computerChoice=="ROCK" ||playerChoice=="SCISSOR"&&computerChoice=="PAPER"){
        result = "YOU WON"
        playerScore++;
        updateBoard()
        playGame()
    }
    else
        console.log("Try Again!!! Invalid Input ");
        console.log(playerChoice);
        console.log(computerChoice);
    }
    if(playerScore == 5){
        result = `YOU WON
        Game Ends`
        updateBoard()   
    } else {
        result = `YOU LOST
        Game Ends`
        updateBoard()
    }
    playerChoice = "FALSE"
}

function updateBoard(result){
    displayRoundWinner.innerHTML = result
    displayComputerChoice.innerHTML = computerChoice
    displayPlayerChoice.innerHTML = playerChoice
    displayComputerScore.innerHTML = computerScore
    displayPlayerScore.innerHTML = playerScore
} 
