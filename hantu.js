/* This project is being referred and forked from Shawn Beaton https://github.com/Beat0154/easiest-game-ever/blob/master/script.js */

var hantu = document.getElementById("hantu");
var pumpkin = document.getElementById("pumpkin");
var counter=0;
function jump(){
    if(hantu.classList == "animate"){return}
    hantu.classList.add("animate");
    setTimeout(function(){
        hantu.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(hantu).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(pumpkin).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);