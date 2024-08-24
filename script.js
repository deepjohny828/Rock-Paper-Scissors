const infa = document.querySelector("#infa");
const papper = document.querySelector("#papper");
const knife = document.querySelector("#knife");
const chHuman = document.querySelector(".choiceHuman");
const chRobot = document.querySelector(".choiceRobot");

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
function getHumanChoice(){
    if(number > 3 || number < 0){
        alert("Такого пока нет, поэтому заменили ваше значение на бумагу, чтобы вы могли ей подтереться. С любовью от разработчиков :)");
        return 2;
    }
    return number;
}
function getStatusOfRound(comp,hum){
    if(comp === hum){
        return "Ничья";
    }
    else if((comp === 0 && hum === 1)||(comp === 1 && hum === 2) || (comp === 2 && hum === 0)){
        humanScore++;
        return "Люди победили, восстание машин ещё далеко!";

    }
    else if((comp === 1 && hum === 0)||(comp === 2 && hum === 1) || (comp === 0 && hum === 2)){
        computerScore++;
        return "Скайнет не за горами -_-";
    }
    else{
        return "HZ";
    }
}
function main(){
    for(let i = 0; i < 5;++i){
        let comp = getComputeChoice();
        let hum = getHumanChoice();
        let status = getStatusOfRound(comp,hum);
        
    }
}
console.log(main());