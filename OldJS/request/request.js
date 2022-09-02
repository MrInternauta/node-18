const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(URL, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        const DONE = 4;
        const OK = 200;
        if (this.readyState === 4) {
            if (this.status === 200) {
                callback(null, this.responseText)
            } else {
                callback(newError('Error' + this.status))

            }
        }

    }
    xhr.open('GET', URL);
    xhr.send(null);
}
get('https://swapi.co/api/people/2', function(err, response) {
    if (err) {
        return console.log(`ERROR: ${err}`)
    }
    let mensaje = '';
    response = JSON.parse(response);

    mensaje = `El nombre es ${ response.name}, `;
    get(response.homeworld, function(err, home) {
        if (err) {
            return console.log(`ERROR: ${err}`)
        }
        home = JSON.parse(home)
        mensaje += `El planeta es ${home.name}`;
        console.log(mensaje);
    })
})