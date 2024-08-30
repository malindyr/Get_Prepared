
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

fetchData();

async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
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