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
pelicula.anyoEstreno;

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







