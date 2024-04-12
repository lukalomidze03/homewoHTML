const ticbox =document.querySelectorAll('.ticbox')
const restart =document.querySelector('.reload')
const textstatus =document.querySelector('.turn-box')
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [0,4,6],

]
let options = ["","","","","","","","",""]
let currentPlayer ="X"
let running = false;

installGame()

function installGame() {
    ticbox.forEach(cell => cell.addEventListener("click", clicked))
    restart.addEventListener("click" , restartGame)
    textstatus.textContent=` ${currentPlayer}`    
    running=true
}

function clicked() {
    const cellindex =this.getAttribute("clicked") 
    if (options[cellindex] != "" ||  !running) {
        return; 
    }
    
    updateCell(this, cellindex)
    checkwinner()
    changeplayer()    
}
function updateCell(cell, index) {
    options[index] =  currentPlayer;
    cell.textContent = currentPlayer;
}


function changeplayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    textstatus.textContent =`${currentPlayer} trun`
}


function checkwinner() {
let roundWon = true;



for (let i = 0; i < winConditions.length; i++) {
    const Condition = winConditions[i];
    const cellA =options[Condition[0]]
    const cellB =options[Condition[1]]
    const cellC =options[Condition[2]]
    
    if (cellA == "" || cellB == "" || cellC == "") {
        continue
    }
    if (cellA == cellB && cellB == cellC) {
        roundWon =true
        break
    }
}

if (roundWon) {
    textstatus.textContent = `${currentPlayer} win! `
    running =false
}
else if (!options.includes("")) {
    textstatus.textContent = `draw! `
    running =false
}
else {changeplayer()}
}

function restartGame() {
    currentPlayer ="X"
 options = ["","","","","","","","",""]

ticbox.forEach( cell => cell.textContent= "")
textstatus.textContent =`${currentPlayer} trun`

 running = true;
        
}
