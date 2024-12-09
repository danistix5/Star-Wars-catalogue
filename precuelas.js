document.addEventListener("DOMContentLoaded", function () {
    const precuelas=[
        {   
            titulo:"Han Solo: Una historia de Star Wars",
            poster:"https://pics.filmaffinity.com/solo_a_star_wars_story-540929627-mmed.jpg",
            año:2018,
            director:"Ron Howard",
            sinopsis:"Muchos años antes de conocer a Luke Skywalker y la Princesa Leia, en una galaxia donde impera el caos y existen numerosas bandas criminales, el joven Han Solo consigue huir del planeta Corellia, pero atrás queda su amada Qi'ra, y Han promete volver a por ella algún día. Tras apuntarse a la Academia Imperial para ser piloto, Han conoce a un wookie llamado Chewbacca y más tarde al famoso jugador Lando Calrissian, dueño del Halcón milenario. En una misión desesperada, Han se unirá a Tobias Beckett para obtener un valioso cargamento de coaxium, del que se extrae el hiperfuel para que las naves naveguen por el hiperespacio.",
    
        },
        {   
            titulo:"Rogue One: Una historia de Star Wars",
            poster:"https://pics.filmaffinity.com/rogue_one_a_star_wars_story-635726332-mmed.jpg",
            año:2016,
            director: "Gareth Edwards",
            sinopsis: "El Imperio Galáctico ha terminado de construir el arma más poderosa de todas, la Estrella de la muerte, pero un grupo de rebeldes decide realizar una misión de muy alto riesgo: robar los planos de dicha estación antes de que entre en operaciones, mientras se enfrentan también al poderoso Lord Sith conocido como Darth Vader, discípulo del despiadado Emperador Palpatine. Historia ambientada entre los episodios III y IV de Star Wars.",
    
        }
    ]
    
  
    mostrarPrecuelas(precuelas);
});
  
function mostrarPrecuelas(precuelas) {
    const seccionpre = document.querySelector("#precuelas");
    seccionpre.innerHTML = ""; // Limpiar la sección de películas
        
    precuelas.forEach(precuela => {
        const precuelaHTML = `
        <div class="precuela">
                        <img src="${precuela.poster}" alt="Poster precuela">
                        <h3 class="titulo">${precuela.titulo}</h3>
                        <p class="anio">Año: ${precuela.año}</p>
                        <p class="director">Director: ${precuela.director}</p>
        </div>
        `;
        seccionpre.innerHTML += precuelaHTML;
    });
}
  