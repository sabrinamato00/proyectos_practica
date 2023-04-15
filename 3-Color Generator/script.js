const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNum = document.getElementById("colorNum");
const contenedor = document.querySelector(".contenedor");

const generarColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rgbColor = `rgb(${r},${g},${b})`;

  return rgbColor;
};

const changeColor = () => {
  const newColor = generarColor();
  body.style.backgroundColor = newColor;
  button.style.backgroundColor = newColor;
  console.log("Se cambio el color");
  colorNum.innerHTML = newColor;
};

button.addEventListener("click", changeColor);
