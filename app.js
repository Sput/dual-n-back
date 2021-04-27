let past_blocks = [];

function Light_up_new_block(){
    
    switch (new_block) {
        case 0:
            document.getElementById("top_left").toggleClass('active');
            break;
        case 1:
            document.getElementById("top_center").toggleClass('active');
            break;
        case 2:
            document.getElementById("top_right").toggleClass('active');
            break;
        case 3:
            document.getElementById("center_left").toggleClass('active');
            break;
        case 4:
            document.getElementById("center_center").toggleClass('active');
            break;
        case 5:
            document.getElementById("center_right").toggleClass('active');
            break;
        case 6:
            document.getElementById("bottom_left").toggleClass('active');
            break;
        case 7:
            document.getElementById("bottom_center").toggleClass('active');
            break;
        case 8:
            document.getElementById("bottom_right").toggleClass('active');
            break;
    }
                    
    
    return past_blocks;
}

//Function to create a random number and return it
function getRandomNumber(){
    new_block = Math.floor(Math.random()*9);
    return new_block;
}

//Function to take in button push
function buttonPressed(past_blocks, new_block, num_back) {
    let correctGuess = 0;
    if (past_blocks[past_blocks.length-num_back] == new_block){
        correctGuess = 1;
    }
    return correctGuess;
}

//Function to update score data
function updateScore(correctGuess, current_score) {
    if (correctGuess){
        current_score++;
    }
    return current_score;
}


//Function to update the game stage (how many blocks have been shown) 
//right now this is not a function, not sure if I need to make it one, right now it makes sense
//to just have one line that reads: rounds_left = rounds_left--;

//Update score and game state on the screen
function updatestoScreen(current_score) {
    let score = document.getElementById("current_score");
    score.innerHTML = current_score;
    return;
}


document.getElementById("begin").onclick = function(){
    //Light up a new block
    //console.log(Math.floor(Math.random()*9));
    let rounds_left = 20;
    let num_back = document.getElementById("num_back").value; 
    console.log("begin button pressed");
    let new_block = getRandomNumber();
    past_blocks.push(new_block);
    userGuess = document.getElementById("match_btn").addEventListener("click", buttonPressed(past_blocks, new_block, num_back))
    current_score = updateScore(userGuess, current_score);
    rounds_left = rounds_left--;
    updatestoScreen(current_score);
    Light_up_new_block();
    console.log(past_blocks)
};