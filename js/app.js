// alert('yow!');
var myButton = document.getElementsByTagName('button')[0];
var myTarget = document.getElementsByTagName('section')[0];
var myInput = document.getElementsByTagName('input')[0];
var myScale = document.getElementsByName('cheap');

console.log(myButton);
console.log(myTarget);

myButton.addEventListener("click", function(event){
  var myAmount = myInput.value * 1;
  if (isValidInput(myAmount)) {
    var tipAmount = getTipAmount();
    myTarget.innerText = 'You should tip $' + (myAmount * tipAmount).toFixed(2);
  } else {
    myTarget.innerText = "Enter a valid number."
  }
  event.preventDefault();
});

function getTipAmount(){
  for (var x = 0; x < myScale.length; x++){
    if(myScale[x].checked){
      return myScale[x].value * 1;
    }
  }
  return 0.2;
}

function isValidInput(i) {
  console.log(i + ': ' + typeof(i));
  return (typeof(i) === 'number') ? true : false;
}
