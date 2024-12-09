document.addEventListener("DOMContentLoaded", function () {
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
    
    const series=[
        {
            titulo:"The Acolyte",
            poster:"https://pics.filmaffinity.com/star_wars_the_acolyte-194378053-mmed.jpg",
            año:2024,
            director:"Leslye Headland",
            temporadas: 1,
            sinopsis:"The Acolyte' lleva a los espectadores a una galaxia de oscuros secretos y poderes emergentes del lado oscuro en los últimos días de la era de la Alta República."
        },
        {
            titulo:"Star Wars: The Clone Wars",
            poster:"https://pics.filmaffinity.com/star_wars_the_clone_wars-575954204-mmed.jpg",
            año:2008,
            director:"Dave Filoni",
            temporadas:7,
            sinopsis:"Las violentas Guerras Clon, la caída a los infiernos de Anakin, la majestuosa sabiduría de Obi-Wan y la presentación de Ahsoka Tano. Todo en una serie de animación aclamada por los fans y en la que Dave Filoni se ganó el eterno respeto de un público que más de una vez se ha probado como bastante difícil de complacer."
        },
        {
            titulo:"Star Wars: La remesa mala",
            poster:"https://pics.filmaffinity.com/star_wars_the_bad_batch-919515341-msmall.jpg",
            año:2021,
            director:"Dave Filoni",
            temporadas:3,
            sinopsis:"Una 'mala remesa' de clones experimentales de élite intentan abrirse camino a través de una galaxia en constante evolución justo cuando se empiezan a experimentar las primeras consecuencias de las Guerras Clon."
        },
        {
            titulo:"Obi-Wan Kenobi",
            poster:"https://pics.filmaffinity.com/obi_wan_kenobi-628833571-msmall.jpg",
            año:2022,
            director:"Deborah Chow",
            temporadas:1,
            sinopsis:"Obi-Wan debe salir de su exilio para rescatar a la joven princesa Leia, secuestrada de su planeta Alderaan en un complot de los Inquisidores del Imperio para capturar al escurridizo Jedi."
        },
        {
            titulo:"Star Wars Rebels",
            poster:"https://pics.filmaffinity.com/star_wars_rebels-647036959-mmed.jpg",
            año:2014,
            director: "Dave Filoni",
            temporadas:4,
            sinopsis: "El canciller supremo Palpatine ha ideado una falsa guerra para aumentar su poder dentro de la República galáctica y con ella ha proclamado un Imperio del que él es líder supremo. Para consolidar su nuevo régimen tratará de destruir a la noble Orden Jedi, al tiempo que surge en la sombra un movimiento rebelde."
        },
        {
            titulo:"Andor",
            poster: "https://pics.filmaffinity.com/andor-868730434-mmed.jpg",
            año:2022,
            director:"Tony Gilroy",
            temporadas: 1,
            sinopsis: "La serie nos mostrará las aventuras del espía rebelde Cassian Andor durante sus años de formación en la Rebelión, justo antes de los eventos de 'Rogue One'"
        },
        {
            titulo:"Star Wars Resistance",
            poster:"https://pics.filmaffinity.com/star_wars_resistance-635825248-mmed.jpg",
            año:2018,
            director:"Dave Filoni",
            temporadas: 2,
            sinopsis:"Poe y BB-8 asignan a Kaz, un nuevo espía de la Resistencia, a subirse abordo del Colossus. Esta gigantesca plataforma de reabastecimiento de gasolina se ubica en el anillo exterior de un planeta acuático, hogar de coloridos alienígenas, droides y distintos tipos de criaturas. Allí, Kaz trabaja como mecánico mientras vive con un viejo amigo de Poe, Yeager, un piloto veterano que ahora se dedica a trabajar en su propia tienda de reparación de naves espaciales. Una vez asentado en su nueva misión y acompañado por el inseparable BB-8, Kaz tendrá que evitar el peligro de la Primera Orden mientras vive todo tipo de aventuras extraordinarias. "
        },
        {
            titulo:"The Mandalorian",
            poster:"https://pics.filmaffinity.com/the_mandalorian-299892082-mmed.jpg",
            año:2019,
            director:"Jon Favreau",
            temporadas: 3,
            sinopsis:"Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la serie sigue los pasos de Mando, un cazarrecompensas perteneciente a la legendaria tribu de los mandalorianos, un pistolero solitario que trabaja en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República."
        },
        {
            titulo:"El libro de Boba Fett",
            poster:"https://pics.filmaffinity.com/the_book_of_boba_fett-736176382-mmed.jpg",
            año:2021,
            director:"Jon Favreau",
            temporadas:1,
            sinopsis: "Centrado en el cazarecompensas Boba Fett y su lugarteniente Fennec Shand, que vuelven al planeta Tatooine lidiando con el inframundo galáctico para reclamar el territorio que en su día gobernó Jabba el Hutt."
        },
        {
            titulo:"Ahsoka",
            poster:"https://pics.filmaffinity.com/ahsoka-572593600-mmed.jpg",
            año:2023,
            director:"Dave Filoni",
            temporadas: 1,
            sinopsis:" Ambientada después de la caída del Imperio, la serie sigue al antiguo caballero Jedi mientras investiga una amenaza que se cierne sobre la galaxia."
        },
    ]
    
    
    function mostrarPeliculas(peliculas) {
        const seccionpel = document.querySelector("#peliculas");
        seccionpel.innerHTML = ""; // Limpiar la sección de películas
            
        peliculas.forEach(pelicula => {
            const peliculaHTML = `
            <div class="pelicula">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${pelicula.poster}" alt="Poster película">
                            <h3 class="titulo">${pelicula.titulo}</h3>
                            <p class="anio">Año: ${pelicula.año}</p>
                            <p class="director">Director: ${pelicula.director}</p>
                        </div>
                        <div class="flip-card-back">
                            <article>
                                <p>${pelicula.sinopsis}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            `;
            seccionpel.innerHTML += peliculaHTML;
        });
    }
    function mostrarPrecuelas(precuelas) {
        const seccionpre = document.querySelector("#precuelas");
        seccionpre.innerHTML = ""; // Limpiar la sección de películas
            
        precuelas.forEach(precuela => {
            const precuelaHTML = `
            <div class="precuela">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${precuela.poster}" alt="Poster precuela">
                            <h3 class="titulo">${precuela.titulo}</h3>
                            <p class="anio">Año: ${precuela.año}</p>
                            <p class="director">Director: ${precuela.director}</p>
                        </div>
                        <div class="flip-card-back">
                            <article>
                                <p>${precuela.sinopsis}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            `;
            seccionpre.innerHTML += precuelaHTML;
        });
    }
    function mostrarSeries(series) {
        const seccionser = document.querySelector("#series");
        seccionser.innerHTML = ""; // Limpiar la sección de películas
            
        series.forEach(serie => {
            const serieHTML = `
            <div class="serie">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${serie.poster}" alt="Poster serie">
                            <h3 class="titulo">${serie.titulo}</h3>
                            <p class="anio">Año: ${serie.año}</p>
                            <p class="director">Director: ${serie.director}</p>
                        </div>
                        <div class="flip-card-back">
                            <article>
                                <h3>Temporadas:${serie.temporadas}</h3>
                                <h2>Sinopsis</h2>
                                <p>${serie.sinopsis}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            `;
            seccionser.innerHTML += serieHTML;
        });
    }
    
     
    const calendar = document.getElementById("calendar").querySelector("tbody");
    const monthYear = document.getElementById("monthYear");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");
      
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
      
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
      
    function renderCalendar(year, month) {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
      
        calendar.innerHTML = "";
        monthYear.textContent = `${months[month]} ${year}`;
      
        let row = document.createElement("tr");
        for (let i = 0; i < firstDay; i++) {
            row.appendChild(document.createElement("td"));
        }
      
        for (let day = 1; day <= daysInMonth; day++) {
            if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
              calendar.appendChild(row);
              row = document.createElement("tr");
            }
            const cell = document.createElement("td");
            cell.textContent = day;
            row.appendChild(cell);
        }
        calendar.appendChild(row);
    }
      
    prevMonth.addEventListener("click", function () {
        currentMonth = (currentMonth - 1 + 12) % 12;
        if (currentMonth === 11) currentYear--;
        renderCalendar(currentYear, currentMonth);
    });
      
    nextMonth.addEventListener("click", function () {
        currentMonth = (currentMonth + 1) % 12;
        if (currentMonth === 0) currentYear++;
        renderCalendar(currentYear, currentMonth);
    });
      
    renderCalendar(currentYear, currentMonth);
    if (window.location.pathname === "/peliculas.html") {
        mostrarPeliculas(peliculas); // Llama a la función si estás en la página correcta
    } else if (window.location.pathname === "/precuelas.html") {
        mostrarPrecuelas(precuelas); // Llama a la función si estás en la página correcta
    } else if (window.location.pathname === "/series.html") {
        mostrarSeries(series); // Llama a la función si estás en la página correcta
    }
    
});



  