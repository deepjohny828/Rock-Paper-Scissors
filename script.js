const infa = document.querySelector("#infa");
const papper = document.querySelector("#papper");
const knife = document.querySelector("#knife");
const chHuman = document.querySelector("#choiceHuman");
const chRobot = document.querySelector("#choiceRobot");
const btn = document.querySelector(".choiceBtn");
const scoreHum = document.querySelector(".scoreHum");
const scoreRob = document.querySelector(".scoreRob");
const numberRound = document.querySelector("#numberRound");
let countRound = 0;

let humanScore = 0;
let computerScore = 0;

function getComputeChoice(){
    let number = Math.floor(Math.random() * 10) % 3;
    return number; 
}
function printChoice(number){
    if(number === 0){
        return "Ножницы";
    }
    else if(number === 1){
        return "Камень";
    }
    else if(number === 2){
        return "Бумага";
    }
    else{
        return "";
    }
}
function refreshValue(){
    chHuman.textContent = "...";
    chRobot.textContent = "...";
    scoreHum.textContent = "0";
    scoreRob.textContent = "0";
    humanScore = 0;
    computerScore = 0;
    countRound = 0;
}
function getStatusOfRound(comp,hum){
   
    if(humanScore === 5){
        refreshValue();
        return "Люди победили, восстание машин ещё далеко!";
    }
    else if(computerScore === 5){
        refreshValue();
        return "Скайнет не за горами -_-";
    }
    else if(computerScore === 5 && humanScore === 5){
        refreshValue();
        return "Люди живут в мире с машинами";
    }
    else{   
        countRound++;
        if((comp === "Камень" && hum === "Бумага")||(comp === "Бумага" && hum === "Ножницы") || (comp === "Ножницы" && hum === "Камень")){
            humanScore++;
            scoreHum.textContent = humanScore;
            if(humanScore === 5){
                refreshValue();
                return "Люди победили, восстание машин ещё далеко!";
            }
        }
        else if((comp === "Бумага" && hum === "Камень")||(comp === "Ножницы" && hum === "Бумага") || (comp === "Камень" && hum === "Ножницы")){
            computerScore++;
            scoreRob.textContent = computerScore;
            if(computerScore === 5){
                refreshValue();
                return "Скайнет не за горами -_-";
            }
        }
    }
    return "Раунд " + countRound;
    
}
function main(){
   
    btn.addEventListener('click',function(e){
        switch (e.target.id){
            case "rock":
                chHuman.textContent = "Камень";
                break;
            case "papper":
                chHuman.textContent = "Бумага";
                break;
            case "knife":
                chHuman.textContent = "Ножницы";
                break;
        }
        chRobot.textContent = printChoice(getComputeChoice());
        infa.textContent = getStatusOfRound(chRobot.textContent,chHuman.textContent);
        
    });
   
}
main();