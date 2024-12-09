document.addEventListener("DOMContentLoaded", function () {
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
    
  
    mostrarSeries(series);
});
  
function mostrarSeries(series) {
    const seccionser = document.querySelector("#series");
    seccionser.innerHTML = ""; // Limpiar la sección de películas
        
    series.forEach(serie => {
        const serieHTML = `
        <div class="serie">
                        <img src="${serie.poster}" alt="Poster serie">
                        <h3 class="titulo">${serie.titulo}</h3>
                        <p class="anio">Año: ${serie.año}</p>
                        <p class="director">Director: ${serie.director}</p>
                        <article>
                            <h3>Temporadas:${serie.temporadas}</h3>
                        </article>
        </div>
        `;
        seccionser.innerHTML += serieHTML;
    });
}
  