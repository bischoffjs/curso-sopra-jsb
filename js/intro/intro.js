var texto = "Hola mundo!";

console.log(texto);
console.log(typeof(texto))

console.log(typeof(true))

texto = 3;

console.log(texto);
console.log(typeof(texto))

// comentario d una linea

/*
Comentario 
de 
varias 
lineas
*/

//Declarando dos variables en una linea
var texto;

//Podemos delcarar variables con var, let y const

var texto;
//constante
const b = 5;

var unTexto = '';
var un_numero = 3;

//
var texto = 'hola', numero = 4;

var nombre1 = "Me llamo \"Angel\""
var nombre2  = 'Me llamo "Angel"'

//Salto de linea \n

if (nombre1) {
console.log('Valor truthy');
}

if(unTexto){
    console.log('Valor truthy')
}

if(!unTexto){
    console.log('Valor falsy')
}

if(un_numero = 3){
    console.log('Paso')
}

//Arrays

var numsLiteral = [1, 2, 3, 4, 5]; //El que mas se usa es esta.
var numsConstructor = new Array(6, 7, 8, 9); //Por si queremos hacer un array de espacios definidos

var ar3Posiciones = new Array(3);
ar3Posiciones[0] = 10;
ar3Posiciones[1] = 11;
ar3Posiciones.push(12);
ar3Posiciones.push(13);
ar3Posiciones.push(14);
ar3Posiciones.push(15);
console.log(ar3Posiciones);

//Se puede acceder a la letra en la posicion de la palabra
nombre1 = 'Angel';
console.log(nombre1[1]);

//No se puede acceder a la posicion de un numero
num = 223;
console.log(num[1]);

var direccion = ['Calle', 'Norte', 12, '3B', 28330, 'Madrid', true];

console.log(direccion);

vartxtNum = 3 % 2 === 0 ? 'Es par' : 'Es impar';

//Es igual que un if y else normal

//Consola
console.log('Un mensaje de informacion');
console.warn('Un mensaje de peligro');
console.error('Un mensaje de error');

//alert suelta un popup 
//alert('Un mensaje');

//Popup con dos opciones de acpetar y cancelar 
//var esVerdad = confirm('Es verdad lo que dicen?');
//Cancelar devuelve null y aceptar lo que escribimos es lo que devuelve
//var miNombre = prompt('Como te llamas??');

/*
var nombre = prompt('Cual es tu nombre?');
var apellido = prompt('Cual es tu apellido?');
var respuesta = nombre + " " + apellido;
console.log(respuesta);
*/
/*
if (miNombre === 'Paco')
{
    console.log('Eres Paco');
}
else if (miNombre === 'Angel')
{    
    console.log('Eres Angel');
}
else 
{
console.log("No eres paco ni angel quien eres");
}

//Switch
switch(miNombre){
    case 'Paco':
        console.log("eres Paco");
        break;
    case 'Angel':
        console.log("eres Angel");
        break;
        default:
        console.log("No eres paco ni Angel quien eres");
}
*/
//Bucle
//for

var nombres = ['Rob', 'Arya', 'Sansa', 'Rickon', 'Bran'];
for (var i = 0; i < nombres.length; i++)
{
    console.log(nombres[i]);
}

//For in

for (var i in nombres)
{
    console.log('FORIN: ' + nombres[i]);
}

// For of 

for (var nombre of nombres){
        console.log('FOROF: ' + nombre);
}

//While
var num = prompt('Introduce un num:');
while (Number(num) !== -1){
    'Introduce -1 para salir del bucle'
    num = prompt('Introduce un num:');
}

//DoWhile

do{
    console.log('Introduce -1 para salir del bucle');
    num = prompt('Introduce un num');
} while (Number(num) !== -1);

//Ejercicio 10

