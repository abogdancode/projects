var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init()

function init() {
	setupModeBtns();
	setupSquares();
	resetBtn.addEventListener("click", reset);
	reset()
}

function setupModeBtns(){
	for (var i=0; i<modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6
			reset();
		})
	}
}

function setupSquares(){
	for (var i=0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!!!"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetBtn.textContent = "Play Again?"
			} else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		})
	}
}

function reset(){
	messageDisplay.textContent = "";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.display= "block";
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display= "none";

		}
		
	}
	h1.style.background = "steelblue";
	resetBtn.textContent = "New colors";
}

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];

	for (var i=0; i<num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);
	return "rgb(" +r+ ", " +g+ ", " +b+ ")";
}