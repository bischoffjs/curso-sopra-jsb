

const IMAGENES = [
    'https://vignette.wikia.nocookie.net/lossimpson/images/6/65/Bart_Simpson.png/revision/latest?cb=20100530014756&path-prefix=es',
    'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bd1c.png',
    'https://www.stickpng.com/assets/images/5a0c40785a997e1c2cea1168.png',
    'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
    'http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bd1b.png'
];

let posicionActual = 0;
imagen.setAttribute('src', [IMAGENES[posicionActual]]);

function pasarFoto() {
    if (posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    imagen.setAttribute('src', [IMAGENES[posicionActual]]);
}

function retrocederFoto() {
    if (posicionActual <= 0) {  
        posicionActual = IMAGENES.length - 1;
    } else {
        posicionActual--;
    }

    imagen.setAttribute('src', [IMAGENES[posicionActual]]);
}

anterior.addEventListener('click', pasarFoto);
siguiente.addEventListener('click', retrocederFoto);


