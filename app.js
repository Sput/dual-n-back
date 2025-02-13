//define variables to get started with

let button = document.querySelector("#start")
let buttons = document.querySelectorAll(".button")
let computer_gives = [];
let user_input = []

//take in the button to be lit up, and light it up, then return it to normal
function Light_up_new_block(button_gives) {
    console.log("Light up new block")
    
    buttons[button_gives].classList.add("lightup");
    setTimeout(function()    {
        buttons[button_gives].classList.remove("lightup");
    }, 200);
}


//begin game, called from push of start button
function beginGame() {
    console.log("begin game")
    document.getElementById("start").disabled = true;
    //enableReset();
    //disableStart();
    computer_action();
}

//computer takes actions on its array
function play_state_computer_array() {
    //disableClick();
    console.log("play_state_computer array")
    let i = 0;
    let intervalId = setInterval(() => {
        Light_up_new_block(computer_gives[i]);
        i++
        if (i>= computer_gives.length) {
            clearInterval(intervalId);
            enableClick();
        }
    }, 1000);
}

//computer decides on action and executes move
function computer_action() {
    console.log("computer action")
    user_input = [];
    current_score();
    getRandomNumber();
    play_state_computer_array();
}


//user makes a selection 
function enableClick()    {
    console.log("enable Click")
    document.getElementById("0").addEventListener("click", userInput);
    document.getElementById("1").addEventListener("click", userInput);
    document.getElementById("2").addEventListener("click", userInput);
    document.getElementById("3").addEventListener("click", userInput);
    document.getElementById("4").addEventListener("click", userInput);
    document.getElementById("5").addEventListener("click", userInput);
    document.getElementById("6").addEventListener("click", userInput);
    document.getElementById("7").addEventListener("click", userInput);
    document.getElementById("8").addEventListener("click", userInput);
}
//button.addClass("lightu
//User pushes a button it SHOULD light up
function userInput() {
    console.log("user input")
    console.log(this.id)
    Light_up_new_block(this.id);
    user_input.push(this.id);
    compareArrays();
}

//Function to create a random number and return it
function getRandomNumber(){
    console.log("get random number")
    new_block = Math.floor(Math.random()*9);
    //let buttonActivated = buttons[random]; I removed the definiton of this array, so removing this too
    computer_gives.push(new_block);
    return;
}

//compare user input with computer array, if they match we continue, if not its game over
function compareArrays() {
    console.log("compare arrays")
    for (let i = 0; i < user_input.length; i++)    {
        if (computer_gives[i] != user_input[i])    {
            gameOver();
            return;
        }
    }
    if (user_input.length == computer_gives.length)    {
        computer_action();
    }
}

//when game resets gives an action
function resetGame() {
    computer_gives = [];
    current_score();
    document.getElementById("start").disabled = false;
}


//called when compareArrays doesn't match
function gameOver() {
    let modal = document.getElementById("score_modal");
    let span = document.getElementsByClassName("close")[0];
    console.log("game over")
    final_score = computer_gives.length - 1
    document.getElementById("start").disabled = false;
    computer_gives = [];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
        current_score();
    }
}


//Update score and game state onuser_score
function current_score() {
    console.log("current score")
    /*let score = document.getElementById("current_score");
    score.innerHTML = current_score; I think I don't need this anymore*/
    document.getElementById("user_score").innerHTML = computer_gives.length;
    document.getElementById("modal_score").innerHTML = computer_gives.length;
    return;
}




//when start is clicked game starts
document.getElementById("start").addEventListener("click", beginGame);
document.getElementById("reset").addEventListener("click", resetGame);