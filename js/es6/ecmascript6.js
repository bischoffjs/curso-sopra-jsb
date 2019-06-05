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

console.log('---------------------')

let pelicula = {
    titulo: 'Los vengadores',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    setAnyoEstreno: function(anyo) {
        this.anyoEstreno = anyo;
        let mostrar = () => {
            // function mostrar ()
            console.log(this);
        }
        mostrar();
    }
}

pelicula.setAnyoEstreno(2019);
console.log(pelicula.anyoEstreno);

//Rest Params 

function getNumLoteria(idSorteo,...nums) 
{
//Todos los numeros que recibira los mete
//en un array llamado nums 
// al colocar como primer parametro idSorteo toma el primer numero y asi 
// sucesivamente toma los parametros.
console.log(nums);
//queremos que el metodo devuelva un string separados por comas
return `Sorteo ${idSorteo}: ${nums.join()}`;
}

let numGanador = getNumLoteria(1, 4, 24, 31, 38, 46);
console.log(numGanador);


//No queremos crear varios
// getNumPrimitiva()
// getNumEuroMillo()


// SPREAD OPERATOR
let telefonoDesconocido = ['+34', 677334672];
let telefonoCharly = ['+34', 677334672, 'Charly'];

function creaNumConPrefijo(prefijo, numTelf, nombre = 'Desconocido') {
    return `${nombre} : ${prefijo} ${numTelf}`;
}

//creaNumConPrefijo(telefono[0], telefono[1]); //mODO CONVENCIONAL
//Con Spread 
//let resp = creaNumConPrefijo(...telefono);

console.log(creaNumConPrefijo(...telefonoDesconocido));
console.log(creaNumConPrefijo(...telefonoCharly));

// DESESTRUCTURACION

let serie = {
    titulo: 'Gangland Undercover',
    temporadas: 3,
    episodios: 30,
    finaliza: true
}

let {titulo, finaliza, ...restoProps} = serie;
console.log(titulo, finaliza);
console.log(restoProps);

let mascostas = ['gato', 'perro', 'pez', 'canario'];

// let gato = mascota[0]
// let perro = mascota[1]
// let pez = mascota[2]

//let [gato, perro, pez, canario] = mascostas
let [gato, perro, ...restoMascotas] = mascostas



console.log(gato, perro);
console.log(restoMascotas);