document.body.innerHTML = `
<div class="container">
<h1 class="heading_container">Pokemon list</h1>
<div id="mainContainer" class="main-container"></div>
</div>
`;
const poke_container=document.getElementById("mainContainer");

let motherfunction = ((n,m) => {
  

const geting= async (id) => {
    try {
      const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
      const res=await fetch(url);
      const pokemon=await res.json();
        Cards(pokemon);
      console.log(pokemon);
      }
    catch (error) {
      console.error(error);
    }
  };
geting();


const total=n;
const pokemons=async()=>{
    for(let i=m; i<total; i++){
        await geting(i);
    }
}
pokemons();


function Cards(pokemon){
    const pokemonEl=document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    const pokeAbility=pokemon.abilities;
    const pokeMove=pokemon.moves;
    
    const pokeInnerHTML=
    `
    <div class="img-container">
    <img src="${pokemon.sprites.front_default}"
    </div>
    <p class="name"><b>Name:</b>
    ${name}</p>
    <p class="ability"><b>Abilities:</b>
    ${pokeAbility[0] && pokeAbility[1]? 
        `${pokeAbility[0].ability.name}, 
         ${pokeAbility[1].ability.name}`
          : "none"
    }</p>
    <p class="moves"><b>Moves:</b> 
    ${pokeMove[0].move.name}, 
    ${pokeMove[1].move.name}</p>
    <p class="weight"><b>Weight:</b>
    ${pokemon.weight}</p>
    `;
    pokemonEl.innerHTML=pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
  
  
  }
})

motherfunction(11,0)