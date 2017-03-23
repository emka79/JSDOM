var allButtons = document.getElementsByClassName('button');

console.log(allButtons);


  for ( var n = 0; n < allButtons.length; n++) {
	console.log(allButtons[n].innerText);
	alert('Tekst zawarty w klasie button to: ' + allButtons[n].innerText)
}


