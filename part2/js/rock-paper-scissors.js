function rockPaperScissor() {

	var input = prompt("Enter your choice in rock, paper or scissors.").toLowerCase();
	if (!(input == "rock" || input == "paper" || input == "scissors")) {
		alert("Incorrect choice!!!");
		return rockPaperScissor();
	}

	var computersChoice = Math.round(Math.random() * 100);
	computersChoice = (computersChoice <= 33) ? "rock" : ((computersChoice >= 67) ? "scissors" : "paper");	



	var infoStr = "You choose " + input + ", computer choose " + computersChoice + ".";	
	var winStr = "You win.";
	var loseStr = "You lose."

	if (computersChoice == input) {
		alert("It's a tie.")
	}
	if (computersChoice == "rock") {
		(input == "paper") ? alert(infoStr + winStr) : alert(infoStr + loseStr);
	}
	if (computersChoice == "scissors") {
		(input == "rock") ? alert(infoStr + winStr) : alert(infoStr + loseStr);
	}
	if (computersChoice == "paper") {
		(input == "rock") ? alert(infoStr + loseStr) : alert(infoStr + winStr);		
	}
}

rockPaperScissor();