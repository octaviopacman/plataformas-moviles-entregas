// Conexion a PokéAPI

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151t';


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results);
        let pokemones = data.results;
        pokemones.forEach((pokemon) => {
            let card = document.createElement('div');
            card.classList.add('card');
            let cardTitulo = document.createElement('div');
            cardTitulo.classList.add('card-body');
            let cardContenido = document.createElement('div');
            cardContenido.classList.add('card-text');
            
            cardTitulo.textContent = pokemon.name;
            cardContenido.textContent = ``;
            card.appendChild(cardTitulo);
            card.appendChild(cardContenido);
            document.body.appendChild(card);


        });

    })






