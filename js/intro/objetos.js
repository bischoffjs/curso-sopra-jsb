//conjunto de calve valor clave valor, cla clave puede ir sin comillas pero si es 
//alguna palabra que no beria de serla si deberemos poner comillas

var persona = {
    nombre: 'Charly',
    apellido: 'Falco',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona['nombre']);

var clave = 'apellido';

console.log(persona.clave); //no llega al objeto
console.log(persona[clave]);

//persona.edad = 20;

console.log(persona.nombreCompleto());

var pelicula = {
    titulo: 'Los vengadores',
    director:   {
        nombre: '...',
        apellidos: 'Russo'
    },	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    genero: ['Accion','Superheroes'],
    setAnyEstreno: function(anyo){
        this.anyoEstreno = anyo;
        var self = this;
        function mostrar(){
            //console.log(this);
            console.log(self);
        }
        mostrar();
    }
}

pelicula.setAnyEstreno(2019);
console.log(pelicula.anyoEstreno);

// var serie = {
//     titulo:'The Walking Dead',
//     episodios: 180,
//     episodiosVistos: 178
// }

function Serie(titulo, episodios, episodiosVistos) {
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
}


var twd = new Serie('The Walking Dead', 180, 178);
var got = new Serie('Game of Thrones', 180, 178);
console.log(twd);


var cancionBatman = new Array(16).join('what'-1) + 'Batman';
console.log(cancionBatman);

////////////

//EJERCICIO 14

var numeros = [1,3,4,5,7,8,4,6,15,65,12];

var ej14 = numeros.map(function(num,) {
    return num % 2 === 0 ? 'PAR' : num;
})

console.log(ej14);

///////////

// texto = 'Hola mundo!';
// console.log(text.lenght);
// console.log(texto.toUpperCase());
// console.log(texto.replace(/o/gi, 0));
// console.log(texto.split(' '));
// console.log(texto.substring(3,6));
// console.log(texto.indexOf('!'));
// console.log(texto.indexOf('e'));
// console.log(texto.includes('o'));


var colores = ['amarillo', 'rojo', 'verde']
var ultimo = colores.pop();
var primero = colores.shift();
console.log(ultimo, primero);
colores.push('blanco');
colores.unshift('azul'); // lo añade al principio en la primera posicion
colores = colores.concat([ultimo, primero]);
console.log(colores);

var hoy = new Date();
console.log(hoy.getFullYear());
console.log(hoy.getDay());
console.log(hoy.getDate());
console.log(typeof(hoy));

var angel = {nombre: 'Angel'};
var angelJSON = JSON.stringify(angel);
var angelJS = JSON.parse(angelJSON);
console.log(angel);
console.log(angelJSON);
console.log(angelJS);


//PROTOTYPE

function Coche(marca, modelo, color)
{
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        // this.pintar = (nuevoColor) => {
        //     this.color =nuevoColor;
        // }
}

Coche.prototype.pintar = function (nuevoColor) {
    this.color = nuevoColor;
}

let tesla = new Coche('Tesla', 'Roadster', 'rojo');
let audi = new Coche ('Audi','A3','negro');
console.log(tesla);
console.log(audi);

console.log('----------------')
//REFERENCIAS

console.log('Referencias')

let perro = {
    nombre: 'Roko',
    edad: 2
}

let perro1 = {...perro}; //*1
perro1.edad = 3;
console.log(perro);

//Crear un nuevo objeto
//*1 Crea un objeto igualanadolo a perro1
let perro2 = Object.assign({}, perro);

//Con los array pasaria igual

let miArray = [1, 2, 3];
let nuevoArray = [...miArray]; //le estas colocando a ese array el array anterior pracicamente igualandolo
nuevoArray.push(5); //al array le estas colocando al final el numero 5 
let otroArray = [].concat(miArray) //otra manera de asignar el array entero













