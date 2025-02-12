//submit button
// jshint esversion:6
var isNotClicked=true;


 var loveCalculator=function () {
  var yourName = document.getElementById("firstname").value;
  var loversName = document.getElementById("lovername").value;
  // var loveScore = Math.random() * 100;
 // adding function to get score between 80 to 100 
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  var loveScore = getRandomNumber(80,100)
  var loveFinal = Math.round(loveScore);
  if (yourName === "") {
    alert("please enter your name");
  } else if (loversName === "") {
    alert("Please enter your lovers name");

  } else if (isNotClicked) {
    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
    isNotclicked=false;
  }
  else {
    document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
  }
};

//resetbutton
function resetFunction() {
  location.reload();
}
