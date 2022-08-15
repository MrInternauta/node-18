function name(params = 'Felipe') {
    console.log(`Hola ${params}`);
}

function name2(params = [1, 2, 3]) {
    console.log(params);
}

name('Jose');
name();
name2([0, 9, 8]);
name2();