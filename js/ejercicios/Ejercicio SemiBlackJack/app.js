iniciar();

function getRandomNum() {
    return Math.ceil((Math.random() * 10) + 1);
}

function iniciar() {
    var puntosUser = 0;
    var puntosMaquina = 0;
    var resp = true;
    while (resp == true) {
        var resp = confirm('Quiere un numero?');
        if (resp == true) {
            var numAzar = getRandomNum()
            var puntosUser = puntosUser + numAzar;
            console.log('Puntos Usuario.: ' + puntosUser);
            if (puntosUser > 20) {
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

    while (puntosMaquina <= 17) {
        var numAzar = getRandomNum()
        var puntosMaquina = puntosMaquina + numAzar;
        console.log('Puntos Maquina.: ' + puntosMaquina);
        if (puntosMaquina > 20) {
            console.log('La Maquina se ha pasado de 20');
            resp == false;
            break;
        }
    }

    validarGanador(puntosMaquina, puntosUser);

    reinicio();
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

function validarGanador(puntosMaquina, puntosUser) {
    if ((puntosMaquina > puntosUser) && (puntosMaquina <= 20)) {
        console.log("Maquina ha ganado");
    }
    else if ((puntosUser > puntosMaquina) && (puntosUser <= 20)) {
        console.log("User ha ganado");
    }
    else if ((puntosUser > 20) && (puntosMaquina <= 20)) {
        console.log("Maquina ha ganado");
    }
    else if ((puntosMaquina > 20) && (puntosUser <= 20)) {
        console.log("User ha ganado");
    }
    else if ((puntosMaquina > 20) && (puntosUser > 20)) {
        console.log("Ambos han perdido");
    }
    else {
        (puntosMaquina == puntosUser)
        console.log('Empate');
    }

}