
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


/*
//Get user input
//Make sure that its a valid input
function getHumanChoice(){
    let ask = prompt("Choose rock, paper, or scissors").toLowerCase();

    while(ask!=="rock" && ask!=="paper" && ask!=="scissors"){
        ask = prompt("Invalid input, please only choose rock, paper, or scissors").toLowerCase();
    }
    return ask;
}
*/

//Keeps track of score
let playerScore=0;
let computerScore=0;
const result = document.createElement("span");

//Simulates the round and updates winners score
function playRound(humanChoice, computerChoice){
    if(playerScore ===5 || computerScore ===5){
        if(playerScore>computerScore){
            winner = "Game over, You win!";
        }
        else{
            winner = "Game over, You lose!";
        }
        result.innerText = winner;
        playerScore = 0;
        computerScore = 0;
        return;
    }
    h=humanChoice;
    c=computerChoice;
    if (h===c){
        result.innerText = "It was a tie!";
    }
    else if ((h==="rock" && c==="paper") || (h==="paper" && c==="scissors") || (h==="scissors" && c==="rock")){
        result.innerText = "You Lose! " + c + " beats " + h;
        computerScore++;
    }
    else{
        result.innerText = "You win! " + h + " beats " + c;
        playerScore++;
    }
    scores.innerText = `Player: ${playerScore} Computer: ${computerScore}`;
}


select = document.createElement("div");
document.body.appendChild(select);

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

select.appendChild(rock);
rock.innerText = "rock";

select.appendChild(paper);
paper.innerText = "paper";

select.appendChild(scissors);
scissors.innerText = "scissors";

const scores = document.createElement("p");

select.appendChild(scores);


rock.addEventListener('click', ()=>{
    playRound("rock", getComputerChoice());
    select.appendChild(result);
});

paper.addEventListener('click', ()=>{
    playRound("paper", getComputerChoice());
    select.appendChild(result);
});

scissors.addEventListener('click', ()=>{
    playRound("scissors", getComputerChoice());
    select.appendChild(result);
});

select.style.display = "flex";
select.style.justifyContent = "center";
select.style.flexDirection = "column";
select.style.alignItems = "center";
select.style.gap = "10px";

/*
//Executes rounds for best to 5 game
function playGame(){
    while(playerScore+computerScore<5){
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Computer: " + computerScore + " You: " + playerScore);
    }
}

playGame();
*/