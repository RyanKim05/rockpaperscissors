
//Use Math.random to generate random numbers
//Use the random numbers to get the computer to select rock paper or scissors
//Save this in the string and return it
function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*100);
    let rps="";
    if(randomNum<=33){
        rps="rock";
    }
    else if(33<randomNum && randomNum<67){
        rps="paper";
    }
    else{
        rps="scissors";
    }

    return rps;
}



//Get user input
//Make sure that its a valid input
function getHumanChoice(){
    let ask = prompt("Choose rock, paper, or scissors").toLowerCase();

    while(ask!=="rock" && ask!=="paper" && ask!=="scissors"){
        ask = prompt("Invalid input, please only choose rock, paper, or scissors").toLowerCase();
    }
    return ask;
}


//Keeps track of score
let playerScore=0;
let computerScore=0;

//Simulates the round and updates winners score
function playRound(humanChoice, computerChoice){
    h=humanChoice;
    c=computerChoice;
    if (h===c){
        console.log("It was a tie!");
    }
    else if ((h==="rock" && c==="paper") || (h==="paper" && c==="scissors") || (h==="scissors" && c==="rock")){
        console.log("You Lose! " + c + " beats " + h);
        computerScore++;
    }
    else{
        console.log("You win! " + h + " beats " + c);
        playerScore++;
    }
}

//Executes rounds for best to 5 game
function playGame(){
    while(playerScore+computerScore<5){
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Computer: " + computerScore + " You: " + playerScore);
    }
}

playGame();