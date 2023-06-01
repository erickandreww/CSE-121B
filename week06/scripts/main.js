// Pokemons Presentation

// API URL
const url = "https://pokeapi.co/api/v2/pokemon/";
let results = null;

// getPokemon, this function takes the URL from the API and combines it with the user's response,
// applies the fetch, and calls the output function.
async function getPokemon(url, pokeName) {
    let info = url+pokeName;
    const response = await fetch(info);
    if (response.ok) {
      const data = await response.json();
      output(data);
    }
}

// This function receives all data from getPokemon() and Outputs it.
function output(data) {
    let outputs = document.querySelector('#poke-card');
    results = data;
    // Defines variables to hold what will be output.
    // Pokemon's name and Image.
    let nameImage = `<section class="name-image">
        <h2>${results.name}</h2>
        <img src="${results.sprites.front_default}" alt="Image of ${results.name}">
        </section>`;
    // Types, height, and weight of the Pokemon.
    let pokeType = "";
    // An If else statement to check if the pokemon has one or two types.
    if (results.types.length === 2) {
      pokeType = `<div class="poke-info-section">
        <h3>Pokémon Type: ${results.types[0].type.name} / ${results.types[1].type.name}</h3>
        <h3>Height: ${results.height}</h3>
        <h3>Weight: ${results.weight}</h3>
        </div>`;
    }
    else {
      pokeType = `<div class="poke-info-section">
        <h3>Pokémon Type: ${results.types[0].type.name}</h3>
        <h3>Height: ${results.height}</h3>
        <h3>Weight: ${results.weight}</h3>
        </div>`;
    }
    // Pokemon base status.
    let pokeStats = `<div class="poke-stats-section">
    <h3>Pokémon Status:</h3>
    <h4>${results.stats[0].stat.name}: ${results.stats[0].base_stat} </h4>
    <h4>${results.stats[1].stat.name}: ${results.stats[1].base_stat} </h4>
    <h4>${results.stats[2].stat.name}: ${results.stats[2].base_stat} </h4>
    <h4>${results.stats[3].stat.name}: ${results.stats[3].base_stat} </h4>
    <h4>${results.stats[4].stat.name}: ${results.stats[4].base_stat} </h4>
    <h4>${results.stats[5].stat.name}: ${results.stats[5].base_stat} </h4>
    </div>`;
    // Appending all the information to poke-card ID.
    outputs.innerHTML = nameImage;
    outputs.innerHTML += pokeType;
    outputs.innerHTML += pokeStats;
}

// This function resets the poke-card id information.
function reset() {
  const reseting = document.getElementById("poke-card");
  reseting.innerHTML = '';
}

// this Function Initializes the code after the clicks in submit. 
// It takes the user prompt and calls the getPokemon Function
function initialize() {
  reset()
  let userInput = document.querySelector("#pokeNameInput").value;
  let pokeName = userInput;
  getPokemon(url, pokeName);
}

// addEventListener method to launch code after user clicks submit.
document.querySelector("#pokeButton").addEventListener("click", initialize);
console.log("second: ", results);