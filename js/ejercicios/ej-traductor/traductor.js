
// Traductor.traduce('hola', 'en') //Hello
// Traductor.traduce('buenos dias', 'it') //Boungiorno
// Traductor.traduce('adios', 'en') //bye


var Traductor = (function () {
    console.log('Introduzca palabra e idioma');
    var en = {
        'hola': 'hello',
        'adios': 'bye',
        'casa': 'house',
        'mesa': 'table',
        'carro': 'car'
    };

    var it = {
        'hola': 'ciao',
        'adios': 'addio',
        'casa': 'casa',
        'mesa': 'tavolo',
        'carro': 'carrozza'
    };
    
    function traduce(palabra, idioma) {
        if (idioma == 'en') {
            return en[palabra];
        }
        else if (idioma == 'it') {
            return it[palabra];
        }
    }


    return {
        traduce: traduce
    }

})()

