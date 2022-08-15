const fetch = require('node-fetch');
let get = async() => {
    try {
        const resp = await fetch('https://swapi.co/api/people/2');
        let personaje = await resp.json();
        const respWorld = await fetch(personaje.homeworld);
        personaje.home = await respWorld.json();
        console.log(`El personaje es  ${personaje.name}, El planeta es ${personaje.home.name}`);
    } catch (e) { console.log(e) }
}
get()