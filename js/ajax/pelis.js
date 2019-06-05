//URL1: https://ejemplos-dc1c1.firebaseio.com/generos.json
//URL2: https://ejemplos-dc1c1.firebaseio.com/peliculas/<genero>.json

//Paso 1 Pedir los generos
//Paso 2 Mostrar popup para elegir un genero 
//Paso 3 Pedir las peliculas del genero elegido
//Paso 4 Mostrar las peliculas recibidas en un popup

function getGeneros() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            //console.log(xhr.responseText); 
            let datos = JSON.parse(xhr.responseText);
            let generos = datos.join(' , ');
            enviargeneros(generos);
        }
    }

    xhr.send();

}

function getPeliculas(resp) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/peliculas/'+resp+'.json');

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            let datos = JSON.parse(xhr.responseText);
            for (const key in datos) {
                if (datos.hasOwnProperty(key)) {
                    const element = datos[key];
                    enviarpeliculas(element.join(' - '));
                }
            }
            
        }
    }

    xhr.send();

}

function enviargeneros(generos){
    var resp = prompt(generos);
    getPeliculas(resp);
}
function enviarpeliculas(peliculas){
    alert(peliculas);
}

getGeneros();



