var spotOne = document.getElementById('spotOne');
var spotTwo = document.getElementById('spotTwo');
var spotThree = document.getElementById('spotThree');
var red = document.getElementById('red');
var blue = document.getElementById('blue');
var yellow = document.getElementById('yellow');
var objArray = [];


function animateFirstToThird(childOfSpotOne, childOfSpotThree) {
  childOfSpotOne.setAttribute('class', 'oneToThree');
  childOfSpotThree.setAttribute('class', 'threeToOne');
  setTimeout(function(){
    childOfSpotOne.setAttribute('class', null);
    childOfSpotThree.setAttribute('class', null);
    spotOne.appendChild(childOfSpotThree);
    spotThree.appendChild(childOfSpotOne);
  }, 980)
}

animateFirstToThird(red, yellow);
