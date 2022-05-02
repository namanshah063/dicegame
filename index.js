var randomnumber1 = Math.floor(Math.random()*6) + 1;
var randomsource1 = "images/dice" + randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomsource1);




var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomsource2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomsource2);


if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML ="player 1 win";
}
else if (randomnumber2>randomnumber1) {
  document.querySelector("h1").innerHTML ="player 2 win";
}
else{
  document.querySelector("h1").innerHTML ="draw!!";
}
