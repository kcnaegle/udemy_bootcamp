var playTo = document.querySelector("input").valueAsNumber;

var p1Button = document.querySelector("#p1"); // compare to num with ==   then just set with =
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winner = 5;
var numInput = document.querySelector("#playTo");
var p1Display = document.querySelector("#p1score");
var p2Display = document.querySelector("#p2score");

numInput.value = 5;

numInput. addEventListener("change", function() {
	winner = numInput.value;
	console.log(winner)
});

p1Button.addEventListener("click", function() {
	console.log(winner);
	if(!gameOver){
		p1Score++;
		if(p1Score == winner){
			console.log("Game Over!");
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function() {
	if(!gameOver){
		p2Score++;
		if(p2Score == winner){
			console.log("Game Over!");
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
});

