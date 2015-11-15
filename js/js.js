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

function animateSecondToOne(childOfSpotOne, childOfSpotTwo) {
  childOfSpotTwo.setAttribute('class', 'twoToOne');
  childOfSpotOne.setAttribute('class', 'oneToTwo');
  setTimeout(function(){
    childOfSpotTwo.setAttribute('class', null);
    childOfSpotOne.setAttribute('class', null);
    spotOne.appendChild(childOfSpotTwo);
    spotTwo.appendChild(childOfSpotOne);
  }, 980)
}

function animateSecondToThird(childOfSpotTwo, childOfSpotThree) {
  childOfSpotTwo.setAttribute('class', 'twoToThree');
  childOfSpotThree.setAttribute('class', 'threeToTwo');
  setTimeout(function(){
    childOfSpotTwo.setAttribute('class', null);
    childOfSpotThree.setAttribute('class', null);
    spotTwo.appendChild(childOfSpotThree);
    spotThree.appendChild(childOfSpotTwo);
  }, 980)
}

// animateFirstToThird(red, yellow); //animateFirstToThird(spotOne.children[0], spotThree.children[0]); in console
// animateSecondToOne(red, blue); //animateSecondToOne(spotOne.children[0], spotTwo.children[0]); in console
animateSecondToThird(blue, yellow); //animateSecondToThird(spotTwo.children[0], spotThree.children[0]); in console

