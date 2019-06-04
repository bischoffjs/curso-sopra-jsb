var global = 1;
global2 = 2;
//si no se pone var es global

function  fn1(){
    var local1 = 3;
    local2=4;
    console.log(global);
    console.log(global2);

    function fn2(){
        console.log(local1);    
    }
    fn2();
}

fn1();
console.log(global);
console.log(global2);
console.log(local1);

function suma(n1, n2){
    num = n1;
    return num + n2;
}

function muestraConsola(mensaje){
    //console.log(q);
    console.log('Mensaje: ' + mensaje + ', q = ' + q);
}

muestraConsola('1 + 2 = ' + suma(1,2));
muestraConsola('num -> '+ num);
var q = 5;
muestraConsola('4 + 6 = ' + suma(4,6));
