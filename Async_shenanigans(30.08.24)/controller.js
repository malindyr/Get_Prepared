
fetchData1();
function fetchData1(){

fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
.then(response => {
    if(!response.ok){
        throw new Error("could not fetch resource :(");
    }
    return response.json();
})
.then(data => console.log(data.name))
.catch(error => console.error(error));
}
//fetchData();
async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("could not fetch resource (async func)")
        }
        const data = await response.json();
        console.log(data.name);
    }
    catch(error){
        console.error(error);
    }
}
fetchDataFromLocalDb();
async function fetchDataFromLocalDb(){
    try{
        const response = await fetch(``);

        if(!response.ok){
            throw new Error("could not fetch resource (async func)")
        }
        const data = await response.json();
        console.log(data.name);
    }
    catch(error){
        console.error(error);
    }
}