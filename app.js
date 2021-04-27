let past_blocks = [];

function Light_up_new_block(){
    new_block = Math.floor(Math.random()*9);
    past_blocks.push(new_block);
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
function buttonPressed(e)

//Function to update score data

//Function to update the game stage (how many blocks have been shown)

//Update score and game state on the screen




document.getElementById("begin").onclick = function(){
    //Light up a new block
    //console.log(Math.floor(Math.random()*9));
    console.log("begin button pressed");
    document.addEventListener("keypress", buttonPressed)
    Light_up_new_block();
    console.log(past_blocks)
};