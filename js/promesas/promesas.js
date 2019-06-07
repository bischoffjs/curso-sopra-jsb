let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let msg = 'El canario esta en la jaula...';
        resolve(msg);
    }, 1000);
}).then(msg => {
    console.log('Msg' + msg);
})

getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json').them((misDatos) => {
    console.log(misDatos);
    
}) ;


function getDatos(url) {
    //definiendo la promesa y devolviendola
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);


        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let datos =JSOPN.parse(xhr.responseText);
                resolve(datos);
            }
        });

        xhr.send();
    });
}