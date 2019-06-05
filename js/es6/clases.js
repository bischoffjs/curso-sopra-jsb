class Coche {

    //definir propiedad statica, se accede con la clase. Se debe hacer los metodos get y set
   static numRuedas() {
       return 4;
   }

    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;

    }
    //las funciones dentro de las clases no hayq eu poner function, 
    //al colocarla fuera del cosntructor se añade al protoype.
    //No hay necesidad de hacer el prototype.
    pintar(nuevoColor) {
        this.color = nuevoColor;
    }
}
let tesla = new Coche('Tesla', 'Roadster', 'rojo');
console.log(tesla);
let vacio = new Coche();
console.log(vacio);
console.log(Coche.numRuedas());
tesla.pintar('azul');
console.log(tesla);

///HERENCIA

class Persona {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    getNombreCompleto(){
        return this.nombre + ' ' + this.apellidos;
    }

}

class Desarrollador extends Persona {
    constructor (nombre, apellidos, puesto){
        super(nombre, apellidos);
        this.puesto = puesto;
        var edad = 20;
        this.getEdad = function() {
            return edad;
        }
        //No estoy utilizando ningun this dentro
        // this.getEdad = () => {
        //     return edad;
        // }
        this.setEdad = function(nuevaEdad){
            edad = nuevaEdad;
        }
        //No estoy utilizando ningun this dentro
        // this.setEdad = () => {
        //     edad = nuevaEdad
        // }
    }
}

let angel = new Desarrollador('Angel', 'Villabla', 'JS');
console.log(angel.getNombreCompleto());
console.log(angel.getEdad());


