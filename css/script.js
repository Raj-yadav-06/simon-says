let Starter = false;
let Head = document.querySelector("h1");

let scoreBoard = document.querySelector("#score");
let boxes = document.querySelectorAll(".box");
let level = 0;

document.addEventListener("click" , () => {
    if( Starter == false){
        console.log("keypressed")
      Head.innerText= "Game started" ;
      SeqGen();

      Starter = true;
    }
})

let gameSeq = [];
let playerSeq = [];

function btnFlash(btn){
boxes[btn].setAttribute("style" , "background-color : white ;");
setTimeout(() => {
   boxes[btn].removeAttribute("style");

} , 300);
}
function userFlash(btn){
boxes[btn].setAttribute("style" , "background-color : black ;");
setTimeout(() => {
   boxes[btn].removeAttribute("style");

} , 300);
}


let SeqGen = () =>{
    let randIdx = Math.floor(Math.random() * 4) ;
    gameSeq.push(randIdx);
    scoreBoard.innerHTML= "level " + level ;
    btnFlash(randIdx);

}                                                  



for ( let box of boxes){
    box.addEventListener("click" , (event) => {
     index = Array.from(boxes).indexOf(event.target);
     userFlash(index);
     playerSeq.push(index);
    result(playerSeq.length - 1);
     }
    )
    }

let result = (idx) => {

    if( playerSeq[idx]  === gameSeq[idx]){
        if(playerSeq.length === gameSeq.length){
                level++;

                playerSeq = [];
console.log("matched");
            setTimeout(SeqGen() ,  1000);
        

        }
    }else{
        scoreBoard.innerHTML= `Game Over! Your score is <b>${level}</b> <br> Press any key to start Game`;
            document.querySelector("body").style.background= "red";
            setTimeout( function() {
                            document.querySelector("body").style.background = "linear-gradient(to right, #f6f9fc, #e6f0ff)";

            }, 150);
            reset();
    }

}


function reset(){
Starter = false;
level = 0;
gameSeq = [];
playerSeq = [];
}
   
    





