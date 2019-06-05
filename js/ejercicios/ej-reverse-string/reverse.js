function voltear(cadena) {
    let x = cadena.length;
    let cadenaInvertida = "";
   
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }

function funcionstring(texto){
    this.texto = texto;  
}

funcionstring.prototype.voltear = function (nueva=voltear(this.texto)){
    return nueva;
}

// funcionstring.prototype.voltear = function (){
//     return voltear(this.texto);
// }

// funcionstring.prototype.voltear = function (){ 
//     let x = this.texto.length;
//     let cadenaInvertida = "";
   
//     while (x>=0) {
//       cadenaInvertida = cadenaInvertida + this.texto.charAt(x);
//       x--;
//     }
//     return cadenaInvertida;
// }





let palabra = new funcionstring('Hola');
console.log(palabra.voltear());






