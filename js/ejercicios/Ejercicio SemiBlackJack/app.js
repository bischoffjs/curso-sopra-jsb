var puntosUser = 0;
var puntosMaquina = 0;
const numeroTope = 20;
iniciar();

function iniciar() {
    jugarUser()
    jugarMaquina();
    validarGanador(puntosMaquina, puntosUser);
    reinicio();
}

function getRandomNum() {
    return Math.ceil((Math.random() * 10) + 1);
}

function jugarUser(){
    puntosUser = 0;
    puntosMaquina = 0;
    var resp = true;
    while (resp == true) {
        var resp = confirm('Quiere un numero?');
        if (resp == true) {
            var numAzar = getRandomNum()
            var puntosUser = puntosUser + numAzar;
            console.log('Puntos Usuario.: ' + puntosUser);
            if (puntosUser > numeroTope) {
                console.log('Te has pasado de 20');
                resp == false;
                break;
            }
        }
        else {
            resp == false;
            break;
        }


    }
}

function jugarMaquina()
{
    while (puntosMaquina <= 17) {
        var numAzar = getRandomNum()
        var puntosMaquina = puntosMaquina + numAzar;
        console.log('Puntos Maquina.: ' + puntosMaquina);
        if (puntosMaquina > numeroTope) {
            console.log('La Maquina se ha pasado de 20');
            resp == false;
            break;
        }
    }
}

function validarGanador(puntosMaquina, puntosUser) {
    if ((puntosMaquina > puntosUser) && (puntosMaquina <= numeroTope)) {
        console.log("Maquina ha ganado");
    }
    else if ((puntosUser > puntosMaquina) && (puntosUser <= numeroTope)) {
        console.log("User ha ganado");
    }
    else if ((puntosUser > numeroTope) && (puntosMaquina <= numeroTope)) {
        console.log("Maquina ha ganado");
    }
    else if ((puntosMaquina > numeroTope) && (puntosUser <= numeroTope)) {
        console.log("User ha ganado");
    }
    else if ((puntosMaquina > numeroTope) && (puntosUser > numeroTope)) {
        console.log("Ambos han perdido");
    }
    else {
        (puntosMaquina == puntosUser)
        console.log('Empate');
    }

}

function reinicio() {
    var restart = confirm('Volvemos a jugar?');
    if (restart == true) {
        iniciar();
    }
    else {
        console.clear();
        alert('Gracias por jugar.');
    }
}

