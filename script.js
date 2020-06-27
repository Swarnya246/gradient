var css = document.querySelector("h3")
var color_1 = document.querySelector(".color_1")
var color_2 = document.querySelector(".color_2")
var body = document.querySelector("#gradient-background")
var random = document.querySelector("#random")

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color_1.value 
		+ ", " 
		+ color_2.value 
		+ ")";

	css.textContent = body.style.background + ";"
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomBackground() {
	color_1.value = getRandomColor()
	color_2.value = getRandomColor()
	setGradient()
}

color_1.addEventListener("input", setGradient)

color_2.addEventListener("input", setGradient)

random.addEventListener("click", setRandomBackground)