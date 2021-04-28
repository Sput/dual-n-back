//define variables to get started with

let buttons = $(".button"); 
let computer_gives = [];
let user_input = []

function Light_up_new_block() {
    button.addClass("lightup");
    setTimeout(function()    {
        button.removeClass("lightup");
    }, 500);
}

function beginGame() {
    computer_gives = []
    enableReset();
    disableStart();
    computer_action();
}

function play_state_computer_array() {
    disableClick();
    let i = 0;
    let intervalId = setInterval(() => {
        Light_up_new_block($("#" + computer_gives[i]));
        i++
        if (i>= computer_gives.length) {
            clearInterval(intervalId);
            enableClick();
        }
    }, 1000);
}

//computer decides on action and executes move
function computer_action() {
    user_input = [];
    current_score();
    getRandomNumber();
    play_state_computer_array();
}


//user makes a selection 
//++note to self, update this in HTML with numbers
function enableClick()    {
    $("#0").on("click", userInput);
    $("#1").on("click", userInput);
    $("#2").on("click", userInput);
    $("#3").on("click", userInput);
    $("#4").on("click", userInput);
    $("#5").on("click", userInput);
    $("#6").on("click", userInput);
    $("#7").on("click", userInput);
    $("#8").on("click", userInput);
}

//User pushes a button it SHOULD light up
function userInput() {
    Light_up_new_block($(this));
    user_input.push(this.id);
    compareArrays();
}

//Function to create a random number and return it
function getRandomNumber(){
    new_block = Math.floor(Math.random()*9);
    let buttonActivated = buttons[random];
    computer_gives.push(buttonActivated.id);
    return;
}

//compare user input with computer array, if they match we continue, if not its game over
function compareArrays() {
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
    console.log(computer_gives.length);
}

//user clicks button, should be disabled while computer is flashing lights
function enableClick() {
    $("#0").on("click", userInput);
    $("#1").on("click", userInput);
    $("#2").on("click", userInput);
    $("#3").on("click", userInput);
    $("#4").on("click", userInput);
    $("#5").on("click", userInput);
    $("#6").on("click", userInput);
    $("#7").on("click", userInput);
    $("#8").on("click", userInput);
}

//called when compareArrays doesn't match
function gameOver() {
    setTimeout(() => {
        let show_score = confirm("your score was " + computer_gives.length)
    }, 1000);
}

//user cant click while computer is flashing
function disableClick() {
    $(".button").off("click");
}


//cant start game once game is started
function disableStart() {
    $("start").off("click");
}

function enableReset() {
    $("#reset").on("click", resetGame);
}

//Function to take in button push, should not need this anymore, keeping just in case
/*function buttonPressed(computer_gives, new_block, num_back) {
    let correctGuess = 0;
    if (computer_gives[computer_gives.length-num_back] == new_block){
        correctGuess = 1;
    }
    return correctGuess;
}*/

//Function to update score data should no longer be necessary, using length of computer_gives[] to get this
/*function updateScore(correctGuess, current_score) {
    if (correctGuess){
        current_score++;
    }
    return current_score;
}*/


//Function to update the game stage (how many blocks have been shown) 
//right now this is not a function, not sure if I need to make it one, right now it makes sense
//to just have one line that reads: rounds_left = rounds_left--;

//Update score and game state on the screen
function current_score() {
    /*let score = document.getElementById("current_score");
    score.innerHTML = current_score; I think I don't need this anymore*/
    $("#screen").text(computer_gives.length);
    return;
}


document.getElementById("begin").onclick = function(){
    //Light up a new block
    //console.log(Math.floor(Math.random()*9));
    let rounds_left = 20;
    let num_back = document.getElementById("num_back").value; 
    console.log("begin button pressed");
    let new_block = getRandomNumber();
    computer_gives.push(new_block);
    userGuess = document.getElementById("match_btn").addEventListener("click", buttonPressed(computer_gives, new_block, num_back))
    current_score = updateScore(userGuess, current_score);
    rounds_left = rounds_left--;
    updatestoScreen(current_score);
    Light_up_new_block();
    console.log(computer_gives)
};


//when start is clicked game starts
$("#start").on("click", beginGame);