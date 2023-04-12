let estadoLicuadora = "apagado";
let licuadora = document.getElementById("licuadora");
let sonidoLicuadora = document.getElementById("licuadora-sound");
let botonLicuadora = document.getElementById("licuadora-button-sound");

function encenderLicuadora() {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    hacerRuido();
    licuadora.classList.add("active"); //Se utiliza el metodo add de clasList para agregar la clase active que es la que tiene de fondo el gift en mobbimiento   licuadora.classList.add("active");
    //classList proporciona varios métodos que permiten agregar, eliminar y verificar clases en el elemento.
  } else {
    estadoLicuadora = "apagado";
    hacerRuido();
    licuadora.classList.remove("active");
  }
}

function hacerRuido() {
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}
