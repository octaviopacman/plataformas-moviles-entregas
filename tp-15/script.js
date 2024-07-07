// Conexion a PokéAPI

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
let main = document.querySelector('.div-pokemones');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        crearTarjeta(data.results);
    });


function crearTarjeta(pokemones) {
    pokemones.forEach((pokemon, index) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('col-md-3');
        card.classList.add('col-sm-3');

        let cardTitulo = document.createElement('div');
        cardTitulo.classList.add('card-body');

        let cardTipos = document.createElement('div');
        let cardTiposTitulo = document.createElement('p');
        cardTiposTitulo.textContent = 'Tipos:';
        cardTipos.appendChild(cardTiposTitulo);
        cardTipos.classList.add('card-text');

        let cardHabilidades = document.createElement('div');
        let cardHabilidadesTitulo = document.createElement('p');
        cardHabilidadesTitulo.textContent = 'Habilidades:';
        cardHabilidades.appendChild(cardHabilidadesTitulo)
        cardHabilidades.classList.add('card-text');

        let imagenURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;

        let elementoImagen = document.createElement('img');
        elementoImagen.classList.add('card-img-top');
        elementoImagen.classList.add('pokemones');
        elementoImagen.src = imagenURL;

        obtenerTipos(index + 1).then((tipos) => {
            console.log(tipos);
            tipos.forEach((tipo, index) => {
                let elementotipo = document.createElement('p');
                elementotipo.textContent = capitalizeFirstLetter(tipo);
                cardTipos.appendChild(elementotipo);
            });
        });

        obtenerHabilidades(index + 1).then((habilidades) => {
            console.log(habilidades); // Esto imprimirá ["pressure", "unnerve"]
            habilidades.forEach((habilidad, index) => {
                let elementoHabilidad = document.createElement('p');
                elementoHabilidad.textContent = capitalizeFirstLetter(habilidad);
                cardHabilidades.appendChild(elementoHabilidad);
            });
        });

        cardTitulo.textContent = capitalizeFirstLetter(pokemon.name);

        card.appendChild(cardTitulo);

        card.appendChild(elementoImagen);
        card.appendChild(cardTipos);
        card.appendChild(cardHabilidades);


        main.appendChild(card);
    });
}
function obtenerHabilidades(pokemonId) {
    let urlhabilidades = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    return fetch(urlhabilidades)
        .then((response) => response.json())
        .then((data) => {
            return data.abilities.map((ability) => ability.ability.name);
        });
}

function obtenerTipos(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.types.map((type) => type.type.name);
        });
}



