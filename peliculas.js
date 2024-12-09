document.addEventListener("DOMContentLoaded", function () {
    // Array de películas
    const peliculas = [
        {
            titulo: "Episodio I: La amenaza fantasma",
            poster: "https://www.posterscine.com/media/catalog/product/cache/1c91d037a1f0ef180108abb0973795cc/p/o/poster_la_guerra_de_las_galaxias_anakin_sombra_.png",
            año: 1999,
            director:"George Lucas", 
            sinopsis:"Ambientada treinta años antes que 'La guerra de las galaxias (1977)', muestra la infancia de Darth Vader, el pasado de Obi-Wan Kenobi y el resurgimiento de los Sith, los caballeros Jedi dominados por el Lado Oscuro. La Federación de Comercio ha bloqueado el pequeño planeta de Naboo, gobernado por la joven Reina Amidala; se trata de un plan ideado por Sith Darth Sidious, que, manteniéndose en el anonimato, dirige a los neimoidianos, que están al mando de la Federación. El Jedi Qui-Gon Jinn y su aprendiz Obi-Wan Kenobi convencen a Amidala para que vaya a Coruscant, la capital de la República y sede del Consejo Jedi, y trate de neutralizar esta amenaza. Pero, al intentar esquivar el bloqueo, la nave real resulta averiada, viéndose así obligada la tripulación a aterrizar en el desértico y remoto planeta de Tatooine... "
        },
        {
            titulo: "Episodio II: El ataque de los clones" ,
            poster: "https://www.phenomena-experience.com/galeria/Historico_peliculas/A/ataque-de-los-clones-poster.jpg",
            año: 2002,
            director: "George Lucas",
            sinopsis: "Corren tenebrosos tiempos para la República, que continúa envuelta en luchas y sumida en el caos. Un movimiento separatista, formado por centenares de planetas y poderosas alianzas encabezadas por el misterioso conde Dooku, amenaza la galaxia. Ni siquiera los Jedi parecen capaces de conjurar el peligro. Este movimiento provoca el estallido de las guerras clones, que representa el principio del fin de la República. Para allanar el camino, los separatistas intentan asesinar a la senadora Padme Amidala. Para evitar futuros atentados, su seguridad es encomendada a dos caballeros Jedi..."
        },
        {
            titulo: "Episodio III: La venganza de los sith",
            poster: "https://m.media-amazon.com/images/I/71O92W1HkNL.jpg",
            año: 2005,
            director: "George Lucas",
            sinopsis: "Último capítulo de la trilogía de precuelas de Star Wars, en el que Anakin Skywalker definitivamente se pasa al lado oscuro. En el Episodio III aparece el General Grievous, un ser implacable mitad-alien mitad-robot, el líder del ejército separatista Droid. Los Sith son los amos del lado oscuro de la Fuerza y los enemigos de los Jedi. Fueron prácticamente exterminados por los Jedi hace mil años, pero esta orden del mal sobrevivió en la clandestinidad."
           
        },
        {
            titulo: "Episodio IV: Una nueva esperanza",
            poster: "https://i.etsystatic.com/14140434/r/il/de4702/1526222179/il_fullxfull.1526222179_kl3i.jpg",
            año: 1977,
            director:  "George Lucas",
            sinopsis: "La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del Emperador. El intrépido y joven Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial 'El Halcón Milenario', y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo e intentar rescatar a la princesa para volver a instaurar la justicia en el seno de la galaxia."
          
        },
        {
            titulo: "Episodio V: El imperio contraataca",
            poster: "https://pics.filmaffinity.com/La_guerra_de_las_galaxias_Episodio_V_El_imperio_contraataca-701818523-large.jpg",
            año: 1980,
            director: "Irvin Kershner",
            sinopsis: "Tras un ataque sorpresa de las tropas imperiales a las bases camufladas de la alianza rebelde, Luke Skywalker, en compañía de R2D2, parte hacia el planeta Dagobah en busca de Yoda, el último maestro Jedi, para que le enseñe los secretos de la Fuerza. Mientras, Han Solo, la princesa Leia, Chewbacca, y C3PO esquivan a las fuerzas imperiales y piden refugio al antiguo propietario del Halcón Milenario, Lando Calrissian, en la ciudad minera de Bespin, donde les prepara una trampa urdida por Darth Vader."
           
        },
        {
            titulo: "Episodio VI: El retorno del Jedi",
            poster: "https://m.media-amazon.com/images/I/81GkOWkB-0L._AC_UF894,1000_QL80_.jpg",
            año: 1983,
            director: "Richard Marquand",
            sinopsis: "Para ir a Tatooine y liberar a Han Solo, Luke Skywalker y la princesa Leia deben infiltrarse en la peligrosa guarida de Jabba the Hutt, el gángster más temido de la galaxia. Una vez reunidos, el equipo recluta a tribus de Ewoks para combatir a las fuerzas imperiales en los bosques de la luna de Endor. Mientras tanto, el Emperador y Darth Vader conspiran para atraer a Luke al lado oscuro, pero el joven está decidido a reavivar el espíritu del Jedi en su padre. La guerra civil galáctica termina con un último enfrentamiento entre las fuerzas rebeldes unificadas y una segunda Estrella de la Muerte, indefensa e incompleta, en una batalla que decidirá el destino de la galaxia."
        },
        {
            titulo: "Episodio VII: El despertar de la fuerza",
            poster: "https://pics.filmaffinity.com/star_wars_episode_vii_the_force_awakens-625343391-mmed.jpg",
            año: 2015,
            director:"J.J. Abrams",
            sinopsis: "Treinta años después de la victoria de la Alianza Rebelde sobre la segunda Estrella de la Muerte (hechos narrados en el Episodio VI: El retorno del Jedi), la galaxia está todavía en guerra. Una nueva República se ha constituido, pero una siniestra organización, la Primera Orden, ha resurgido de las cenizas del Imperio Galáctico. A los héroes de antaño, que luchan ahora en la Resistencia, se suman nuevos héroes: Poe Dameron, un piloto de caza, Finn, un soldado desertor de la Primera Orden, Rey, una joven chatarrera, y BB-8, un androide rodante. Todos ellos luchan contra las fuerzas del Mal: el Capitán Phasma, de la Primera Orden, y Kylo Ren, un temible y misterioso personaje que empuña un sable de luz roja."
        },
        {
            titulo: "Episodio VIII: Los últimos Jedi",
            poster: "https://pics.filmaffinity.com/star_wars_the_last_jedi-535293064-mmed.jpg",
            año: 2017,
            director: "Rian Johnson",
            sinopsis: "La malvada Primera Orden se ha vuelto más poderosa y tiene contra las cuerdas a la Resistencia, liderada por la General Leia Organa (Carrie Fisher). El piloto Poe Dameron (Oscar Isaac) encabeza una misión para intentar destruir un acorazado de la Primera Orden. Mientras tanto, la joven Rey (Daisy Ridley) tendrá que definir su futuro y su vocación, y el viejo jedi Luke Skywalker (Mark Hamill) revaluar el significado de su vida."
        },
        {
            titulo: "Episodio IX: El ascenso de Skywalker",
            poster: "https://pics.filmaffinity.com/star_wars_the_rise_of_skywalker-619389738-mmed.jpg" ,
            año: 2019,
            director:"J.J. Abrams",
            sinopsis: "Un año después de los eventos de 'Los últimos Jedi', los restos de la Resistencia se enfrentarán una vez más a la Primera Orden, involucrando conflictos del pasado y del presente. Mientras tanto, el antiguo conflicto entre los Jedi y los Sith llegará a su clímax, lo que llevará a la saga de los Skywalker a un final definitivo. Final de la trilogía iniciada con 'El despertar de la Fuerza'."
        }
    ]
    
  
    // Llamar a la función para mostrar las películas
    mostrarPeliculas(peliculas);
  });
  
  // Función para mostrar las películas
function mostrarPeliculas(peliculas) {
    const seccionPeliculas = document.querySelector("#peliculas");
    seccionPeliculas.innerHTML = ""; // Limpiar la sección de películas si ya tiene contenido
  
    // Mostrar cada película
    peliculas.forEach((pelicula) => {
      const peliculaHTML = `
        <div class="pelicula">
                <img src="${pelicula.poster}" alt="Poster película" />
                <h3 class="titulo">${pelicula.titulo}</h3>
                <p class="anio">Año: ${pelicula.año}</p>
                <p class="director">Director: ${pelicula.director}</p>
        </div>
      `;
      seccionPeliculas.innerHTML += peliculaHTML;
    });
}
