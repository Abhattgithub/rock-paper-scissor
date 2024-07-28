let playerChoiceStone = querySelector("#stoneBtn");
let playerChoicePaper = querySelector("#paperBtn");
let playerChoiceScissor = querySelector("#scissorBtn");
let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;
let playerChoice;

let displayRoundNumber = querySelector("#displayRoundNumber")
let displayRoundWinner = querySelector("#displayRoundWinner")
let displayPlayerChoice = querySelector("#displayPlayerChoice")
let displayPlayerScore = querySelector("#displayPlayerScore")
let displayComputerChoice = querySelector("#displayComputerChoice")
let displayComputerScore = querySelector("#displayComputerScore")


playerChoiceStone.addEventListner("click", ()=> {
    playerChoice = "STONE"
    playgame()
} )
playerChoicePaper.addEventListner("click", ()=> {
    playerChoice = "PAPER"
    playgame()
} )
playerChoiceScissor.addEventListner("click", ()=> {
    playerChoice = "SCISSOR"
    playgame()
} )
async function playGame(){
    await buttonpressed;
    let computerChoice = getComputerChoice();
    roundNumber++;
    gameResult(computerChoice, playerChoice)
}

//Randomly selects computers choice using Math.random
function getComputerChoice(){
    let choices = ["ROCK","PAPER","SCISSOR"]
    let computerChoice = Math.floor(Math.random()*3);
    return choices[computerChoice]
}

//Comparing the player choice and computer's choice to see the result
function gameResult(computerChoice, playerChoice){
    displayRoundNumber.innerHTML() = roundNumber
    while(computerScore < 5 && playerScore < 5){
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
}

function updateBoard(result){
    displayRoundWinner.innerHTML() = result
    displayComputerChoice.innerHTML() = computerChoice
    displayPlayerChoice.innerHTML() = playerChoice
    displayComputerScore.innerHTML() = computerScore
    displayPlayerScore.innerHTML() = playerScore
}
