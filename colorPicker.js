var squares = document.querySelectorAll("td");
var new_colors_button = document.querySelector("#new_colors");
var clue = document.querySelector("h1");
var correct_square = Math.floor(Math.random() * 6);

get_new_colors();

for(var i=0; i<squares.length; i++)
{
	squares[i].addEventListener("click", function() {
		if(this.style.background == clue.textContent)
		{
			correct_guess();
		}
		else
		{
			this.style.background = "black";
		}
	});
}

new_colors_button.addEventListener("click", get_new_colors);

function get_new_colors() {
	correct_square = Math.floor(Math.random() * 6);
	console.log("Answer: " + correct_square);

	for(var i=0; i<squares.length; i++)
	{
		var color = random_color_string()
		squares[i].style.background = color;
		if(i == correct_square)
			clue.textContent = color;
	}
}

function correct_guess() {
	for(var i=0; i<squares.length; i++)
	{
			squares[i].style.background = clue.textContent;
	}

	document.querySelector("body").style.background = clue.textContent;
	new_colors_button.style.color = clue.textContent;

}

function random_color_string() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ')';
}