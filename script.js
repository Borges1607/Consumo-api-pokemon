let pokenome = document.querySelector("#pokenome");
let pokeimagem = document.querySelector("#pokeimagem");
let poketipos = document.querySelector("#poketipos");

function pegarDados(){
    let inputTexto = document.querySelector("#nomedafera").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputTexto}`)
        .then((response) => response.json())
        .then((data) => {
            let nome =data.name;
            nome = nome[0].toUpperCase() + nome.slice(1);

            let typesInfo = data.types;

            typesInfo.forEach((element, id) => {
                typesInfo[id] =element.type.name
            });

            return{
                name:nome,
                image: data.sprites.front_default,
                types: String([...typesInfo]).replace(/,/g,", "),
            }
        }
    ).then((result) => {
        pokenome.innerHTML = result.name;
        pokeimagem.innerHTML = `<img src="${result.image}">`
        poketipos.innerHTML = `Tipos: ${result.types}`
    })
}