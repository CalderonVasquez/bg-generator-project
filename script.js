const rgbToHex = rgb => '#' + (rgb.match(/[0-9|.]+/g).map((x, i) => i === 3 ? parseInt(255 * parseFloat(x)).toString(16) : parseInt(x).toString(16)).join('')).padStart(2, '0').toUpperCase();
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
const randomBtn = document.getElementById('random-btn');

function startGradient() {
	body.style.background =	`linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`
}

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	css.textContent = `${body.style.background};`
}
// Add a random button which generates two random numbers for the colour inputs. ******
function randomColorGenerator() {
  let col1 = "rgb" + "(" + (Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ")" + ";");

  let col2 = "rgb" + "(" + (Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ")" + ";");
    console.log(col1)
    color1.value=rgbToHex(col1)
    color2.value=rgbToHex(col2)
    console.log(color1.value,color2.value)
    setGradient()
}
startGradient()
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener('click', randomColorGenerator);
