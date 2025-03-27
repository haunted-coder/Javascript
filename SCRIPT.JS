var dice;
var dices =  ['\u2681', '\u2682', '\u2683', '\u2684', '\u2685', '\u2686'];
var stopped = true;
var t;  


function change(){
var random = Math.floor(Math.random()   *  6);
dice.innerHTML = dices[random];

}
function stopstart(){

if(stopped){
    stopped = false;
    t = setInterval(change, 500);
}else{

clearInterval(t)
stopped = true;

}}

window.onload = function(){
dice = document.getElementById("dice");
stopstart();

}
