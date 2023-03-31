const pokemon_name = document.querySelector("#pokemon_name");
const pokemon_id = document.querySelector("#pokemon_id");
const pokemon_hero = document.querySelector("#pokemon_hero");
const pokemon_type = document.querySelector('#pokemon_type')

async function pesquisaPokemon(pokemon) {
  var mensagemErro = document.querySelector("#erro");
  mensagemErro.innerHTML = "";
  try {
    var consultaPoke = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    var consultaPokeJSON = await consultaPoke.json();
    if (consultaPokeJSON.erro) {
      throw Error("Pesquisa não realizada");
    }

    pokemon_name.innerHTML = consultaPokeJSON.name;
    pokemon_id.innerHTML = consultaPokeJSON.id;
    pokemon_hero.src =
      consultaPokeJSON["sprites"]["versions"]["generation-v"]["black-white"][
        "animated"
      ]["front_default"];
    pokemon_type.innerHTML = ['types']['0']['type']

    console.log(consultaPokeJSON);
    return consultaPokeJSON;
  } catch (erro) {
    mensagemErro.innerHTML = `<p> Pesquisa inválida </p>`;
    console.log(erro);
  }
}

var pokemon = document.querySelector("#pokemon_search");
pokemon.addEventListener("focusout", () => pesquisaPokemon(pokemon.value));
