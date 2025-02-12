console.log("Hello, World!")

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

    console.log(rps);
}

getComputerChoice();