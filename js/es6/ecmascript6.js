// DONDE SE HA PUESTO VAR HASTA AHORA SE PONDRA LET

let angel = 'Angel';
angel = 'Sanchez'

const NUM_MAX = 3;

function getNum(p1) {
    let n1 = 0;
    var n2 = 1;

    if (p1 === 0) {
        let n1 = 3; //no sobrescribe
        var n2 = 4; //si sobrescribe
        console.log(n1);
        console.log(n2);
    }

    console.log(n1);
    console.log(n2);
}

getNum(0);

// TEMPLATE LITERALS

let nombre = 'Rickon'
let apellido = 'Stark'
let nombreCompleto = 'Me llamo ' + nombre + ' ' + apellido;
let nombreCompleto2 = `Me llamo ${nombre} ${apellido}`;
function esPar() {
    return (2 + 2) % 2 === 0 ? 'par' : 'impar'
}
console.log(nombreCompleto);
console.log(nombreCompleto2);
let suma = `La suma de 2+2 es ${2 + 2} y es ${esPar()}`;
console.log(suma);


//ARROW FUNCTIONS

console.log([1, 2, 3, 4].map((num) => {
    return num * 2;
}));

let doubles = [1, 2, 3, 4].map((num) => {
    return num * 2;
})

console.log(doubles);
