function primera(params) {
    return segundo(params + 10);
}

function segundo(params) {
    return tercero(params + 10);
}

function tercero(params) {
    return params + 10;
}

let valor = primera(10)
console.log(valor);