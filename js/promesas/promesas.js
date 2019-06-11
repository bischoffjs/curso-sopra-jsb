// let promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let msg = 'El canario esta en la jaula...';
//         resolve(msg);
//     }, 1000);
// }).then(msg => {
//     console.log('Msg ' + msg);
// })

getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json').then((misDatos) => {
    console.log(misDatos);
    
})


function getDatos(url) {
    //definiendo la promesa y devolviendola
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);


        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let datos = JSON.parse(xhr.responseText);
                resolve(datos);
            }
        });

        xhr.send();
    });
}

function getArrayFromObject(obj) {
    const arr = [];
    for (let id in obj) {
        arr.push(obj[id]);
    }
    return arr;
}

function getGeneroElegido(generos) {
    const arrGeneros = getArrayFromObject(generos);
    return prompt (`Elige un genero: ${arrGeneros.join(', ')}`);
}

getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json').then((generos) => {
    let genero = getGeneroElegido(generos);
    return getDatos(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`)    
})
.then((objPeliculas) => {
    const peliculas = getArrayFromObject(objPeliculas);
    alert(`${funcionChorra(peliculas).join('\n')}`);
})

function funcionChorra (arr){
        return arr.map(item => `- ${item}`);
}
