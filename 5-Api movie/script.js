let pagina = 1;
const btnPrev = document.getElementById("previous");
const btnNext = document.getElementById("next");

btnNext.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
  }
});

btnPrev.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
  }
});

const obtenerPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page=${pagina}`
    );

    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      let peliculas = "";

      datos.results.forEach((pelicula) => {
        peliculas += `
                <div class="pelicula">
                    <img  class="portada" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `;
      });
      document.getElementById("contenedor").innerHTML = peliculas;
    } else if (respuesta.status === 400) {
      console.log("key error");
    } else if (respuesta.status === 404) {
      console.log("No se encontro pelicula");
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log(error);
  }
};

obtenerPeliculas();
