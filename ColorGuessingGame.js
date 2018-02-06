var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("newColors");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var difficulty = 6;

easyButton.addEventListener("click", function() {
	difficulty = 3;
	//reset message display
	messageDisplay.textContent = "";
	//add color highlight
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	//reset h1 background color 
	h1.style.backgroundColor = "steelblue";
	//reset button text
	newColors.textContent = "New Colors";
	//generate all new colors
	colors = generateRandomColors(3);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to be new picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on the page
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
		squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
	
});

hardButton.addEventListener("click", function() {
	difficulty = 6;
	//reset message display
	messageDisplay.textContent = "";
	//add color highlight
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	//reset h1 background color 
	h1.style.backgroundColor = "steelblue";
	//reset button text
	newColors.textContent = "New Colors";
	//generate all new colors
	colors = generateRandomColors(6);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to be new picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on the page
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	};
	
});


newColors.addEventListener("click", function() {
	//reset message display
	messageDisplay.textContent = "";
	//reset h1 background color 
	h1.style.backgroundColor = "steelblue";
	//reset button text
	newColors.textContent = "New Colors";
	//generate all new colors
	colors = generateRandomColors(difficulty);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to be new picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on the page
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	};
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	
	//add click listeners to squares
	squares[i].addEventListener("click", function () {
		//grab color of picked square
		var clickedColor = this.style.backgroundColor;
		
		//compare to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			newColors.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		};
	});
};

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	};
	//change h1 background to picked color
	h1.style.backgroundColor = color;
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	};
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
