var myButton = document.getElementsByTagName('button')[0];

myButton.addEventListener("click", function(event){
  var myInput = document.getElementsByTagName('input')[0];
  var myTarget = document.getElementsByTagName('section')[0];
  myTarget.innerText = getMessage(myInput.value * 1);
  event.preventDefault(); // or, form: "return false"
});

function getMessage(amt){
  return (isValidInput(amt)) ? 'You should tip $' + formattedTip(amt) : "Enter a valid number.";
}

function formattedTip(a) {
  var myScale = document.getElementsByName('cheap');
  return (a * getTipAmount(myScale)).toFixed(2);
}

function getTipAmount(i){
  for (var x = 0; x < i.length; x++){
    if(i[x].checked){
      return i[x].value * 1;
    }
  }
  return 0.2; // default to being a gentleman.
}

function isValidInput(i) {
  return (typeof(i) === 'number' && i > 0) || false;
}
