function muestraMsg(msg)
{
    console.log(msg);
}

muestraMsg("Hola Funcion");//funciona
muestraMsg(); //no funciona
muestraMsg("Mensaje", 2); //pasa el mensaje y el 2 no importa es any
//para acceder a ese 2 seria asi
function muestraMsg(arg1){
        console.log(arguments) //arguments agarra los argumentos
}

//muestraArgs(1,2,3,4);

//Funciones recursivas

function sumatorio(num)
{
    if (num === 1)
    {
        return num;
    }
    else
    {
        return num + sumatorio(num-1);
    }
}

sumatorio(5); //5+4+3+2+1

//Callbacks

function ejemploCallbacks()
{
    console.log(1);
    setTimeout(function() {
        console.log(2);
    },2000);
    console.log(3);
}

console.log('************')
ejemploCallbacks();
console.log('************')

function validar(nombreIntroducido,cb)
{
    console.log('pidiendo nombres validos');
    setTimeout(function(){
        console.log('Nombres validos recibidos...');
        if (['angel','sandra','charly'].includes (nombreIntroducido))
        {
        cb();
        //return true;
        }
    },300)
}

validar();
function guardar(){
    console.log('Datos guardados')
}

var esValido = validar('angel', guardar);
//console.log('ESVALIDO: ' + esValido);
if (esValido){
    guardar();
}

//funciones anonimas
//Ejemplo donde se usan 

var series = ['TWD', 'GOT', 'Chernobyl'];

series.forEach(function (elem,pos){
    console.log(pos + ': ' + elem)
});

//Funciones de Arrays

var nums = [1,2,3,4,5];

var numImpares = nums.filter(function(elem) {
    return elem % 2 !== 0
});

console.log(numImpares);

var numImparesX3 = numImpares.map(function(elem){
    return elem * 3;
});

console.log(numImparesX3);

var sumaTotalnumImparesX3 = numImparesX3.reduce(function(acc,elem){
return acc += elem;
}, 0);

console.log(sumaTotalnumImparesX3);