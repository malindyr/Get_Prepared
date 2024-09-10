//import logo from './logo.svg';
//import './App.css';

function App() {
 
}
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

fetchDataFromLocalDb();
async function fetchDataFromLocalDb(){
    try{
        const response = await fetch(`https://localhost:7262/api/Pokemon/Pokemon/Id/1`);

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

export default App;
