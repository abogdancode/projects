window.onload = function() {
var button = document.getElementById("previewButton");
button.onclick = previewHandler;
//makeImage();
};

function degreesToRadians(degrees) {
return (degrees * Math.PI)/180;
}

function previewHandler() {
var canvas = document.getElementById("tshirtCanvas");
var context = canvas.getContext("2d");

		for (var circles = 0; circles < 20; circles++) {
		drawCircle(canvas, context);
		}
	}	

function drawCircle(canvas, context) {
var radius = Math.floor(Math.random() * 40);
var x = Math.floor(Math.random() * canvas.width);
var y = Math.floor(Math.random() * canvas.height);
context.beginPath();
context.arc(x, y, radius, 0, degreesToRadians(360), true);
var col = "rgba(200,"+radius*2+",100,0.9)";
	context.fillStyle = col;
context.fill();
}




