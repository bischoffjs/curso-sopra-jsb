'https://ejemplos-dc1c1.firebaseio.com/peliculas/<aquivaelgenero>.json'

let btnGuardar = document.getElementById('btn-guardar');

//dir nos muestra todas las actividades/propiedades que tiene boton
console.log(btnGuardar);
console.dir(btnGuardar);

// btnGuardar.onclick = saludar;
// btnGuardar.addEventListener('click', saludar);
// btnGuardar.addEventListener('click', function(e){
//     console.log('Has pulsado un boton');
// });
btnGuardar.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    console.log('Has pulsado un boton: ' + event.target.textContent);

    let inputGenero = document.getElementById('input-genero');

    let nuevoGenero = inputGenero.value.trim();

    let inputPelicula = document.getElementById('input-pelicula');
    let nuevoPelicula = inputPelicula.value.trim();

    if ((nuevoGenero) && (nuevoPelicula)) {
        //Guardamos el genero 
        saveGenero(nuevoGenero, nuevoPelicula);
    }
});
//con addeventlistener no se pone ON
function saveGenero(genero, pelicula) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);
    xhr.addEventListener('readystatechange', () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            Swal.fire({
                text: 'Genero Guardado!',
                type: 'success'
            });
        }
    });
    xhr.send(JSON.stringify(pelicula));
}



// function saludar() {
//     console.log('Hola');
// }