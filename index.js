var randomNumber1 =Math.floor(Math.random()*6+1);
var i=randomNumber1;
document.querySelector(".img1").setAttribute("src","dice"+i+".png");
var randomNumber2 =Math.floor(Math.random()*6+1);
var j=randomNumber2;
document.querySelector(".img2").setAttribute("src","dice"+j+".png");
if(i>j){
  document.querySelector("h1").textContent="🚩Player 1 Wins"
}
else if(i===j){
  document.querySelector("h1").textContent="Draw!!"
}
else{
  document.querySelector("h1").textContent="Player 2 Wins🚩"
}
