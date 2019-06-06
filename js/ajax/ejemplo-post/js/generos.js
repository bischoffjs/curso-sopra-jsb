let btnGuardar = document.getElementById('btn-guardar-genero');

//dir nos muestra todas las actividades/propiedades que tiene boton
console.log(btnGuardar);
console.dir(btnGuardar);

btnGuardar.onclick = saludar;
// btnGuardar.addEventListener('click', saludar);
// btnGuardar.addEventListener('click', function(e){
//     console.log('Has pulsado un boton');
// });
btnGuardar.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    console.log('Has pulsado un boton: ' + event.target.textContent);

    let inputGenero = document.getElementById('nuevo-genero');

    let nuevoGenero = inputGenero.value.trim();
    if (nuevoGenero) {
        //Guardamos el genero 
        saveGenero(nuevoGenero);
    }
});
//con addeventlistener no se pone ON
function saveGenero(genero) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            Swal.fire({
                text: 'Genero Guardado!',
                type: 'success'
            });
        }
    });
    xhr.send(JSON.stringify(genero));
}



function saludar() {
    console.log('Hola');
}