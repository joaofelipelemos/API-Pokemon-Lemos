const pokemon_name = document.querySelector("#pokemon_name");
const pokemon_id = document.querySelector("#pokemon_id");
const pokemon_hero = document.querySelector("#pokemon_hero");
const pokemon_type = document.querySelector("#pokemon_type");
const pokemon_specie = document.getElementById("#pokemon_specie");
const pokemon_abilities1 = document.querySelector("#pokemon_abilities1");
const pokemon_abilities2 = document.querySelector("#pokemon_abilities2");
const pokemon_abilities3 = document.querySelector("#pokemon_abilities3");
const habilidades = document.querySelector('#habilidades');

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
    pokemon_id.innerHTML = "#" + consultaPokeJSON.id;
    pokemon_hero.src =
      consultaPokeJSON["sprites"]["versions"]["generation-v"]["black-white"][
        "animated"
      ]["front_default"];
    pokemon_type.innerHTML =
      "Tipo: " + consultaPokeJSON["types"]["0"]["type"]["name"];
    pokemon_abilities1.innerHTML =
    "<il>"+consultaPokeJSON["abilities"]["0"]["ability"]["name"]+"</il>";
      pokemon_abilities2.innerHTML =
      "<il>"+consultaPokeJSON["abilities"]["1"]["ability"]["name"]+"</il>";
      habilidades.innerHTML = "Habilidades:"
      

    console.log(consultaPokeJSON);
    return consultaPokeJSON;
  } catch (erro) {
    mensagemErro.innerHTML = `<p> Pesquisa inválida </p>`;
    console.log(erro);
  }
}

async function infoSpecie(pokemon) {
  var mensagemErro = document.querySelector("#erro");
  mensagemErro.innerHTML = "";
  try {
    var infoSpecie = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
    );
    var infoSpecieJSON = await infoSpecie.json();
    if (infoSpecieJSON.erro) {
      throw Error("Pesquisa não realizada");
    }

    // pokemon_specie.innerHTML = infoSpecieJSON.gender_rate;

    console.log(infoSpecieJSON);
    return infoSpecieJSON;
  } catch (erro) {
    mensagemErro.innerHTML = `<p> Pesquisa inválida de Espécie </p>`;
    console.log(erro);
  }
}

var pokemon = document.querySelector("#pokemon_search");
pokemon.addEventListener("focusout", () => pesquisaPokemon(pokemon.value));
pokemon.addEventListener("focusout", () => infoSpecie(pokemon.value));
