const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let get = (URL) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            const DONE = 4,
                OK = 200;
            if (this.readyState === DONE) {
                if (this.status === OK) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Error ' + this.status);
                }
            }

        }
        xhr.open('GET', URL);
        xhr.send(null);
    })
}
get('https://swapi.co/api/people/2').then((data) => {
    let mensaje = `El personaje es ${data.name}`;
    get(data.homeworld).then((data) => {
        mensaje += `, Su hogar es ${data.name}`;
        console.log(mensaje);
    }).catch((e) => {
        console.log(e);
    })
}).catch((e) => {
    console.log(e);
})